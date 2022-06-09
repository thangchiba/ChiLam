package lamcuong.xyz.ChiLamAPI.Trade;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetTradeResponse {
    private String tradeId;
    private String customerName;
    private Long money;
    private Boolean isDue;
    private java.sql.Date createDate;
    private java.sql.Date updateDate;
    private Boolean delFlg;
}
