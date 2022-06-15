package lamcuong.xyz.ChiLamAPI.Trade;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
public class AddTradeRequest {
    private String customerId;
    @Min(100)
    @NotNull
    private Long money;
    private Boolean isDue;
    private LocalDateTime createDate;
}
