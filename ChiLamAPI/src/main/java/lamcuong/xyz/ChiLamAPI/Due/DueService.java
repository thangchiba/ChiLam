package lamcuong.xyz.ChiLamAPI.Due;

import lamcuong.xyz.ChiLamAPI.Base.BaseService;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DueService extends BaseService<String> {
    protected RowMapper rowMapper = new BeanPropertyRowMapper<GetDueResponse>(GetDueResponse.class);

    public List<GetDueResponse> getDue(GetDueRequest getDueRequest) {
        String GET_DUE = new StringBuilder()
                .append("SELECT MD.DUE_ID AS DUE_ID\n" +
                        ",  MC.CUSTOMER_NAME AS CUSTOMER_NAME\n" +
                        ",  MD.MONEY AS MONEY\n" +
                        ",  MD.CREATE_DATE AS CREATE_DATE\n" +
                        ",  MD.UPDATE_DATE AS UPDATE_DATE\n" +
                        "FROM M_DUE AS MD\n" +
                        "LEFT JOIN M_CUSTOMER AS MC ON MD.CUSTOMER_ID = MC.CUSTOMER_ID\n" +
                        "WHERE MD.DEL_FLG IS NOT TRUE ").toString();
        String WHERE_CLAUSE = "";
        ArrayList<Object> params = new ArrayList<Object>();
        if (getDueRequest.getDueId() != null) {
            WHERE_CLAUSE += " AND MD.due_id = ?";
            params.add(getDueRequest.getDueId());
        }
        if (getDueRequest.getCustomerId() != null) {
            WHERE_CLAUSE += " AND MD.customer_id = ?";
            params.add(getDueRequest.getCustomerId());
        }
        if (getDueRequest.getFromDate() != null) {
            WHERE_CLAUSE += " AND MD.create_date >= ?";
            params.add(getDueRequest.getFromDate());
        }
        if (getDueRequest.getToDate() != null) {
            WHERE_CLAUSE += " AND MD.create_date <= ?";
            params.add(getDueRequest.getToDate());
        }
        try {
            List<GetDueResponse> result = jdbcTemplate.query(GET_DUE+WHERE_CLAUSE, rowMapper,params.toArray());
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


}
