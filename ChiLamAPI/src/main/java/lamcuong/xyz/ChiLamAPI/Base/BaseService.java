package lamcuong.xyz.ChiLamAPI.Base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class BaseService<T> {
    @Autowired
    protected JdbcTemplate jdbcTemplate;
}