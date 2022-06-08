package lamcuong.xyz.ChiLamAPI.Due;

import lamcuong.xyz.ChiLamAPI.Customer.UpdateCustomerResponse;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class DeleteDueResponse {
    private String dueId;
    private UpdateCustomerResponse updatedCustomer;
}
