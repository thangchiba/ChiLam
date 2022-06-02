package lamcuong.xyz.ChiLamAPI.Customer;

import lamcuong.xyz.ChiLamAPI.Base.BaseService;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService extends BaseService<String> {
    protected RowMapper rowMapper = new BeanPropertyRowMapper<GetCustomerResponse>(GetCustomerResponse.class);

    public List<GetCustomerResponse> getCustomer(GetCustomerRequest request) {
        String WHERE_CLAUSE = "";
        ArrayList<Object> params = new ArrayList<Object>();
        if (request.getCustomerId() != null) {
            WHERE_CLAUSE += " AND customer_id = ?";
            params.add(request.getCustomerId());
        }
        String PAGINATING_QUERY = PaginatingQuery(request.getItemPerPage(), request.getPage());
        String ORDER_BY = (request.getOrderBy() != null) ? " ORDER BY " + request.getOrderBy() : "";
        String SQL_QUERY = new StringBuilder()
                .append("SELECT * " +
                        "FROM M_CUSTOMER " +
                        "WHERE DEL_FLG IS NOT TRUE " +
                        WHERE_CLAUSE + ORDER_BY + PAGINATING_QUERY).toString();
        try {
            List<GetCustomerResponse> result = jdbcTemplate.query(SQL_QUERY, rowMapper, params.toArray());
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


}
