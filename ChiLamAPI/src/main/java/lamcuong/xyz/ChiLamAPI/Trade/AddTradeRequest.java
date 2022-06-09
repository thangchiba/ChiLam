package lamcuong.xyz.ChiLamAPI.Trade;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AddTradeRequest {
    private String customerId;
    private Long money;
    private Boolean isDue;
    private LocalDateTime createDate;
}
