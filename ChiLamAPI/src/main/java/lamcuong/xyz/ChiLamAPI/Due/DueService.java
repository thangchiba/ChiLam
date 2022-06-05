package lamcuong.xyz.ChiLamAPI.Due;

import lamcuong.xyz.ChiLamAPI.Base.BaseService;
import lamcuong.xyz.ChiLamAPI.Customer.*;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class DueService extends BaseService<String> {
    protected RowMapper rowMapper = new BeanPropertyRowMapper<GetDueResponse>(GetDueResponse.class);

    public List<GetDueResponse> getDue(GetDueRequest request) {
        String WHERE_CLAUSE = "";
        ArrayList<Object> params = new ArrayList<Object>();
        if (request.getDueId() != null) {
            WHERE_CLAUSE += " AND MD.due_id = ?";
            params.add(request.getDueId());
        }
        if (request.getCustomerId() != null) {
            WHERE_CLAUSE += " AND MD.customer_id = ?";
            params.add(request.getCustomerId());
        }
        if (request.getFromDate() != null) {
            WHERE_CLAUSE += " AND MD.create_date >= ?";
            params.add(request.getFromDate());
        }
        if (request.getToDate() != null) {
            WHERE_CLAUSE += " AND MD.create_date <= ?";
            params.add(request.getToDate());
        }
        String PAGINATING_QUERY = PaginatingQuery(request.getItemPerPage(), request.getPage());
        String ORDER_BY = (request.getOrderBy() != null) ? " ORDER BY " + request.getOrderBy() : "";
        String SQL_QUERY = new StringBuilder()
                .append("SELECT MD.DUE_ID AS DUE_ID\n" +
                        ",  MC.CUSTOMER_NAME AS CUSTOMER_NAME\n" +
                        ",  MD.MONEY AS MONEY\n" +
                        ",  MD.CREATE_DATE AS CREATE_DATE\n" +
                        ",  MD.UPDATE_DATE AS UPDATE_DATE\n" +
                        "FROM M_DUE AS MD\n" +
                        "LEFT JOIN M_CUSTOMER AS MC ON MD.CUSTOMER_ID = MC.CUSTOMER_ID\n" +
                        "WHERE MD.DEL_FLG IS NOT TRUE " +
                        WHERE_CLAUSE + ORDER_BY + PAGINATING_QUERY
                ).toString();
        try {
            List<GetDueResponse> result = jdbcTemplate.query(SQL_QUERY, rowMapper, params.toArray());
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public AddDueResponse AddDue(AddDueRequest request) {
        String SQL_QUERY = "WITH isr AS (INSERT INTO public.m_due(\n" +
                "due_id,customer_id,money,create_date, update_date, del_flg)\n" +
                "VALUES (nextval('due_id_seq'),?, ?, ?, ?, ?) RETURNING *)" +
                "SELECT *,mc.customer_name FROM isr " +
                "LEFT JOIN m_customer as mc on mc.customer_id = isr.customer_id;\n" +
                "";
        ArrayList<Object> params = new ArrayList<>();
        params.add(request.getCustomerId());
        params.add(request.getMoney());
        params.add(request.getCreateDate());
        params.add(LocalDateTime.now());
        params.add(false);
        RowMapper<AddDueResponse> rowMapper = new BeanPropertyRowMapper<>(AddDueResponse.class);

        //Add total_money to customer
        String SQL_QUERY_UPDATE_CUSTOMER = "UPDATE public.m_customer SET\n" +
                " total_money = total_money + ?,last_pay_date=? \n" +
                " WHERE customer_id=? RETURNING * ";
        ArrayList<Object> paramsUpdateCustomer = new ArrayList<>();
        paramsUpdateCustomer.add(request.getMoney());
        paramsUpdateCustomer.add(LocalDateTime.now());
        paramsUpdateCustomer.add(request.getCustomerId());
        RowMapper<UpdateCustomerResponse> rowMapperCustomer = new BeanPropertyRowMapper<>(UpdateCustomerResponse.class);
        try {
            AddDueResponse result = jdbcTemplate.queryForObject(SQL_QUERY, rowMapper, params.toArray());
            UpdateCustomerResponse updateUserResponse = jdbcTemplate.queryForObject(SQL_QUERY_UPDATE_CUSTOMER,rowMapperCustomer, paramsUpdateCustomer.toArray());
            result.setUpdatedCustomer(updateUserResponse);
             return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
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
    public DeleteDueResponse DeleteDue(DeleteDueRequest request) {
        String SQL_QUERY = "UPDATE public.m_due\n" +
                " SET del_flg=true" +
                " WHERE due_id = ? RETURNING due_id";
        ArrayList<Object> params = new ArrayList<>();
        params.add(request.getDueId());
        RowMapper<DeleteDueResponse> rowMapper = new BeanPropertyRowMapper<>(DeleteDueResponse.class);
        try {
            DeleteDueResponse result = jdbcTemplate.queryForObject(SQL_QUERY, rowMapper, params.toArray());
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
