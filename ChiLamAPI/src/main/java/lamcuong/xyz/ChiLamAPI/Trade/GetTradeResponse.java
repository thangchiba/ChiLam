package lamcuong.xyz.ChiLamAPI.Trade;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class GetTradeResponse {
    private String tradeId;
    private String customerName;
    private Long money;
    private Boolean isDue;
    private Long totalDue;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private Boolean delFlg;
}
