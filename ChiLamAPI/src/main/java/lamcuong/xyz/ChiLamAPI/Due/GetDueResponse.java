package lamcuong.xyz.ChiLamAPI.Due;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetDueResponse {
    private String dueId;
    private String customerName;
    private Long money;
    private java.sql.Date createDate;
    private java.sql.Date updateDate;
    private Boolean delFlg;
}
