package lamcuong.xyz.ChiLamAPI.Trade;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class GetTradeRequest {
    private String tradeId;
    private String customerId;
    private Boolean isDue;
    private Date fromDate;
    private Date toDate;
    private Integer itemPerPage;
    private Integer page;
    private String orderBy;
}
