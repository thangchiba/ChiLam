package lamcuong.xyz.ChiLamAPI.Trade;

import lamcuong.xyz.ChiLamAPI.Customer.UpdateCustomerResponse;
import lombok.Data;

@Data
public class DeleteTradeResponse {
    private String tradeId;
    private UpdateCustomerResponse updatedCustomer;
}
