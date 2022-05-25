package lamcuong.xyz.ChiLamAPI.Model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Due {
    private String dueId;
    private String customerId;
    private Long money;
    private java.sql.Date createDate;
    private java.sql.Date updateDate;
    private Boolean delFlg;
}
