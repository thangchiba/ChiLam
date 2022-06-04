package lamcuong.xyz.ChiLamAPI.Customer;

import lamcuong.xyz.ChiLamAPI.Base.BaseService;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CustomerService extends BaseService<String> {

    public List<GetCustomerResponse> GetCustomer(GetCustomerRequest request) {
        String WHERE_CLAUSE = "";
        ArrayList<Object> params = new ArrayList<Object>();
        if (request.getCustomerId() != null) {
            WHERE_CLAUSE += " AND customer_id = ?";
            params.add(request.getCustomerId());
        }
//        String PAGINATING_QUERY = PaginatingQuery(request.getItemPerPage(), request.getPage());
        String ORDER_BY = (request.getOrderBy() != null) ? " ORDER BY " + request.getOrderBy() : "";
        String SQL_QUERY = new StringBuilder()
                .append("SELECT * " +
                        "FROM M_CUSTOMER " +
                        "WHERE DEL_FLG IS NOT TRUE " +
                        WHERE_CLAUSE + ORDER_BY).toString();
        RowMapper<GetCustomerResponse> rowMapper = new BeanPropertyRowMapper<>(GetCustomerResponse.class);
        try {
            List<GetCustomerResponse> result = jdbcTemplate.query(SQL_QUERY, rowMapper, params.toArray());
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public AddCustomerResponse AddCustomer(AddCustomerRequest request) {
        String SQL_QUERY = "INSERT INTO public.m_customer(\n" +
                "customer_id, customer_name, phone, address, total_money, last_pay_date, create_date, update_date, del_flg)\n" +
                "VALUES (nextval('customer_id_seq'),?, ?, ?, ?, ?, ?, ?, ?) RETURNING * ;\n" +
                "";
        ArrayList<Object> params = new ArrayList<>();
        params.add(request.getCustomerName());
        params.add(request.getPhone());
        params.add(request.getAddress());
        params.add(0);
        params.add(new Date());
        params.add(new Date());
        params.add(new Date());
        params.add(false);
        RowMapper<AddCustomerResponse> rowMapper = new BeanPropertyRowMapper<>(AddCustomerResponse.class);
        try {
            AddCustomerResponse result = jdbcTemplate.queryForObject(SQL_QUERY, rowMapper, params.toArray());
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public UpdateCustomerResponse UpdateCustomer(UpdateCustomerRequest request) {
        String SQL_QUERY = "UPDATE public.m_customer\n" +
                " SET customer_name=?, phone=?, address=?,update_date=?" +
                " WHERE customer_id = ? RETURNING *";
        ArrayList<Object> params = new ArrayList<>();
        params.add(request.getCustomerName());
        params.add(request.getPhone());
        params.add(request.getAddress());
        params.add(new Date());
        params.add(request.getCustomerId());
        RowMapper<UpdateCustomerResponse> rowMapper = new BeanPropertyRowMapper<>(UpdateCustomerResponse.class);
        try {
            UpdateCustomerResponse result = jdbcTemplate.queryForObject(SQL_QUERY, rowMapper, params.toArray());
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
