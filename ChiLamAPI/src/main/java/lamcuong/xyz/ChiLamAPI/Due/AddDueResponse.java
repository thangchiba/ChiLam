package lamcuong.xyz.ChiLamAPI.Due;

import lamcuong.xyz.ChiLamAPI.Customer.GetCustomerResponse;
import lamcuong.xyz.ChiLamAPI.Customer.UpdateCustomerResponse;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AddDueResponse {
    private String dueId;
    private String customerName;
    private Long money;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private Boolean delFlg;
    private UpdateCustomerResponse updatedCustomer;
}
