package lamcuong.xyz.ChiLamAPI.Service;

import lamcuong.xyz.ChiLamAPI.Model.Due;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DueService extends BaseService<String> {
    protected RowMapper rowMapper = new BeanPropertyRowMapper<Due>(Due.class);

    private static String GET_DUE = new StringBuilder()
            .append("SELECT * " +
                    "FROM M_DUE ").toString();

    public List<Due> getDue() {
        try {
            List<Due> result = jdbcTemplate.query(GET_DUE, rowMapper);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


}
