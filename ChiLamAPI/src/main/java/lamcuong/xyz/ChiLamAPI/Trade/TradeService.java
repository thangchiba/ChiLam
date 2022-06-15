package lamcuong.xyz.ChiLamAPI.Trade;

import lamcuong.xyz.ChiLamAPI.Base.BaseService;
import lamcuong.xyz.ChiLamAPI.Customer.UpdateCustomerResponse;
import lamcuong.xyz.ChiLamAPI.Exception.APIException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class TradeService extends BaseService<String> {
    protected RowMapper rowMapper = new BeanPropertyRowMapper<GetTradeResponse>(GetTradeResponse.class);

    public List<GetTradeResponse> GetTrade(GetTradeRequest request) throws Exception {
        String WHERE_CLAUSE = "";
        ArrayList<Object> params = new ArrayList<Object>();
        if (request.getTradeId() != null) {
            WHERE_CLAUSE += " AND MT.Trade_id = ?";
            params.add(request.getTradeId());
        }
        if (request.getCustomerId() != null) {
            WHERE_CLAUSE += " AND MT.customer_id = ?";
            params.add(request.getCustomerId());
        }
        if (request.getIsDue() != null) {
            WHERE_CLAUSE += " AND MT.is_due = ?";
            params.add(request.getIsDue());
        }
        if (request.getFromDate() != null) {
            WHERE_CLAUSE += " AND MT.create_date >= ?";
            params.add(request.getFromDate());
        }
        if (request.getToDate() != null) {
            WHERE_CLAUSE += " AND MT.create_date <= ?";
            params.add(request.getToDate());
        }
        String PAGINATING_QUERY = PaginatingQuery(request.getItemPerPage(), request.getPage());
        String ORDER_BY = (request.getOrderBy() != null) ? " ORDER BY " + request.getOrderBy() : "";
        String SQL_QUERY = new StringBuilder()
                .append("SELECT MT.Trade_ID AS Trade_ID\n" +
                        ",  MC.CUSTOMER_NAME AS CUSTOMER_NAME\n" +
                        ",  MT.MONEY AS MONEY\n" +
                        ",  MT.IS_DUE AS IS_DUE\n" +
                        ",  MT.CREATE_DATE AS CREATE_DATE\n" +
                        ",  MT.UPDATE_DATE AS UPDATE_DATE\n" +
                        "FROM M_Trade AS MT\n" +
                        "LEFT JOIN M_CUSTOMER AS MC ON MT.CUSTOMER_ID = MC.CUSTOMER_ID\n" +
                        "WHERE MT.DEL_FLG IS NOT TRUE " +
                        WHERE_CLAUSE + ORDER_BY + PAGINATING_QUERY
                ).toString();
        List<GetTradeResponse> result = jdbcTemplate.query(SQL_QUERY, rowMapper, params.toArray());
        if (result.size() == 0 && request.getPage() == 0) throw new APIException("Không tìm thấy giao dịch nào");
        return result;
    }

    public AddTradeResponse AddTrade(AddTradeRequest request) throws Exception {
        String SQL_QUERY = "WITH isr AS (INSERT INTO public.m_trade(\n" +
                "trade_id,customer_id,is_due,money,create_date, update_date, del_flg)\n" +
                "VALUES (nextval('trade_id_seq'),?,?, ?, ?, ?, ?) RETURNING *)" +
                "SELECT *,mc.customer_name FROM isr " +
                "LEFT JOIN m_customer as mc on mc.customer_id = isr.customer_id;\n" +
                "";
        ArrayList<Object> params = new ArrayList<>();
        params.add(request.getCustomerId());
        params.add(request.getIsDue());
        params.add(request.getMoney());
        params.add(request.getCreateDate());
        params.add(LocalDateTime.now());
        params.add(false);
        RowMapper<AddTradeResponse> rowMapper = new BeanPropertyRowMapper<>(AddTradeResponse.class);

        //Update total_money to customer
        String SQL_QUERY_UPDATE_CUSTOMER = "UPDATE public.m_customer SET\n" +
                " total_money = total_money + ?,last_pay_date=? \n" +
                " WHERE customer_id=? RETURNING * ";
        ArrayList<Object> paramsUpdateCustomer = new ArrayList<>();
        paramsUpdateCustomer.add(request.getMoney() * (request.getIsDue() ? 1 : -1));
        paramsUpdateCustomer.add(LocalDateTime.now());
        paramsUpdateCustomer.add(request.getCustomerId());
        RowMapper<UpdateCustomerResponse> rowMapperCustomer = new BeanPropertyRowMapper<>(UpdateCustomerResponse.class);

        AddTradeResponse result = jdbcTemplate.queryForObject(SQL_QUERY, rowMapper, params.toArray());
        UpdateCustomerResponse updateUserResponse = jdbcTemplate.queryForObject(SQL_QUERY_UPDATE_CUSTOMER, rowMapperCustomer, paramsUpdateCustomer.toArray());
        result.setUpdatedCustomer(updateUserResponse);
        if (result == null || updateUserResponse == null) throw new APIException("Thêm giao dịch thất bại");
        return result;
    }

    //    public UpdateCustomerResponse UpdateCustomer(UpdateCustomerRequest request) {
//        String SQL_QUERY = "UPDATE public.m_customer\n" +
//                " SET customer_name=?, phone=?, address=?,update_date=?" +
//                " WHERE customer_id = ? RETURNING *";
//        ArrayList<Object> params = new ArrayList<>();
//        params.add(request.getCustomerName());
//        params.add(request.getPhone());
//        params.add(request.getAddress());
//        params.add(new Date());
//        params.add(request.getCustomerId());
//        RowMapper<UpdateCustomerResponse> rowMapper = new BeanPropertyRowMapper<>(UpdateCustomerResponse.class);
//        try {
//            UpdateCustomerResponse result = jdbcTemplate.queryForObject(SQL_QUERY, rowMapper, params.toArray());
//            return result;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return null;
//        }
//    }
//
    public DeleteTradeResponse DeleteTrade(DeleteTradeRequest request) throws Exception {
        String SQL_QUERY = "UPDATE public.m_trade\n" +
                " SET del_flg=true" +
                " WHERE trade_id = ? AND del_flg = false RETURNING trade_id";
        ArrayList<Object> params = new ArrayList<>();
        params.add(request.getTradeId());
        RowMapper<DeleteTradeResponse> rowMapper = new BeanPropertyRowMapper<>(DeleteTradeResponse.class);

        //update total_money to customer
        String SQL_QUERY_UPDATE_CUSTOMER = "UPDATE M_CUSTOMER AS MC\n" +
                "SET TOTAL_MONEY = TOTAL_MONEY - (MT.MONEY * (CASE WHEN MT.IS_DUE THEN 1 ELSE -1 END)),\n" +
                " LAST_PAY_DATE = ? " +
                "FROM M_Trade AS MT\n" +
                "WHERE MC.CUSTOMER_ID = MT.CUSTOMER_ID\n" +
                "AND MT.Trade_ID = ? RETURNING * ;";
        ArrayList<Object> paramsUpdateCustomer = new ArrayList<>();
        paramsUpdateCustomer.add(LocalDateTime.now());
        paramsUpdateCustomer.add(request.getTradeId());
        RowMapper<UpdateCustomerResponse> rowMapperCustomer = new BeanPropertyRowMapper<>(UpdateCustomerResponse.class);

        DeleteTradeResponse result = jdbcTemplate.queryForObject(SQL_QUERY, rowMapper, params.toArray());
        if (result == null) throw new Exception("Xóa giao dịch thất bại");
        UpdateCustomerResponse updateUserResponse = jdbcTemplate.queryForObject(SQL_QUERY_UPDATE_CUSTOMER, rowMapperCustomer, paramsUpdateCustomer.toArray());
        result.setUpdatedCustomer(updateUserResponse);
        if (updateUserResponse == null) throw new APIException("Xóa giao dịch thất bại");
        return result;

    }
}
