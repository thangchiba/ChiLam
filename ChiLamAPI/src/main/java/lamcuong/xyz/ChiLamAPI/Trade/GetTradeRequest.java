package lamcuong.xyz.ChiLamAPI.Trade;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Getter
@Setter
public class GetTradeRequest {
    private String tradeId;
    private String customerId;
    private Boolean isDue;
    @NotNull(message = "Khong được null")
    private Date fromDate;
    @NotNull
    private Date toDate;
    private Integer itemPerPage;
    @NotNull(message = "Page Khong Duoc null")
    private Integer page;
    private String orderBy;
}
