package lamcuong.xyz.ChiLamAPI.Trade;

import lamcuong.xyz.ChiLamAPI.Customer.UpdateCustomerResponse;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AddTradeResponse {
    private String tradeId;
    private String customerName;
    private Long money;
    private Boolean isDue;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private Boolean delFlg;
    private UpdateCustomerResponse updatedCustomer;
}
