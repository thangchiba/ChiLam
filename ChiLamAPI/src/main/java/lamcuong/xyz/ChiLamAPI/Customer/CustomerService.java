package lamcuong.xyz.ChiLamAPI.Customer;

import lamcuong.xyz.ChiLamAPI.Base.BaseService;
import lamcuong.xyz.ChiLamAPI.Exception.APIException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CustomerService extends BaseService<String> {
    public List<GetCustomerResponse> GetCustomer(GetCustomerRequest request) throws Exception {
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
        List<GetCustomerResponse> result = jdbcTemplate.query(SQL_QUERY, rowMapper, params.toArray());
        if (result.size() == 0) throw new APIException("Không tìm thấy user nào");
        return result;
    }

    public AddCustomerResponse AddCustomer(AddCustomerRequest request) throws Exception {
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
        AddCustomerResponse result = jdbcTemplate.queryForObject(SQL_QUERY, rowMapper, params.toArray());
        if (result == null) throw new APIException("Thêm Người Dùng Thất Bại!!!");
        return result;

    }

    public UpdateCustomerResponse UpdateCustomer(UpdateCustomerRequest request) throws Exception {
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
        UpdateCustomerResponse result = jdbcTemplate.queryForObject(SQL_QUERY, rowMapper, params.toArray());
        if (result == null) throw new APIException("Cập Nhật Người Dùng Thất Bại!!!");
        return result;

    }

    public DeleteCustomerResponse DeleteCustomer(DeleteCustomerRequest request) throws Exception {
        String SQL_QUERY = "UPDATE public.m_customer\n" +
                " SET del_flg=true" +
                " WHERE customer_id = ? RETURNING customer_id";
        ArrayList<Object> params = new ArrayList<>();
        params.add(request.getCustomerId());
        RowMapper<DeleteCustomerResponse> rowMapper = new BeanPropertyRowMapper<>(DeleteCustomerResponse.class);
        DeleteCustomerResponse result = jdbcTemplate.queryForObject(SQL_QUERY, rowMapper, params.toArray());
        if (result == null) throw new APIException("Xóa Người Dùng Thất Bại!!!");
        return result;

    }
}
