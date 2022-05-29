package lamcuong.xyz.ChiLamAPI.Base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class BaseService<T> {
    @Autowired
    protected JdbcTemplate jdbcTemplate;

    protected String PaginatingQuery(String orderBy, Integer itemPerPage, Integer page) {
        if (itemPerPage != null && page != null) {
            return " ORDER BY " + orderBy + " LIMIT " + itemPerPage + " OFFSET " + ((page - 1) * itemPerPage);
        } else return "";
    }

}
