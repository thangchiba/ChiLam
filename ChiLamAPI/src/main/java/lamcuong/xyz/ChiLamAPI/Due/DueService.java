package lamcuong.xyz.ChiLamAPI.Due;

import lamcuong.xyz.ChiLamAPI.Base.BaseService;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DueService extends BaseService<String> {
    protected RowMapper rowMapper = new BeanPropertyRowMapper<DueResponse>(DueResponse.class);

    private static String GET_DUE = new StringBuilder()
            .append("SELECT MD.DUE_ID AS DUE_ID\n" +
                    ",  MC.CUSTOMER_NAME AS CUSTOMER_NAME\n" +
                    ",  MD.MONEY AS MONEY\n" +
                    ",  MD.CREATE_DATE AS CREATE_DATE\n" +
                    ",  MD.UPDATE_DATE AS UPDATE_DATE\n" +
                    "FROM M_DUE AS MD\n" +
                    "LEFT JOIN M_CUSTOMER AS MC ON MD.CUSTOMER_ID = MC.CUSTOMER_ID\n" +
                    "WHERE MD.DEL_FLG IS NOT TRUE").toString();
    public List<DueResponse> getDue() {
        try {
            List<DueResponse> result = jdbcTemplate.query(GET_DUE, rowMapper);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


}
