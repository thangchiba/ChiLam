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

    public List<GetCustomerResponse> getCustomer(GetCustomerRequest getCustomerRequest) {
        String SQL_QUERY = new StringBuilder()
                .append("SELECT * " +
                        "FROM M_CUSTOMER " +
                        "WHERE DEL_FLG IS NOT TRUE ").toString();
        String WHERE_CLAUSE = "";
        ArrayList<Object> params = new ArrayList<Object>();
        if (getCustomerRequest.getCustomerId() != null) {
            WHERE_CLAUSE += " AND customer_id = ?";
            params.add(getCustomerRequest.getCustomerId());
        }
        try {
            List<GetCustomerResponse> result = jdbcTemplate.query(SQL_QUERY+WHERE_CLAUSE, rowMapper,params.toArray());
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


}
