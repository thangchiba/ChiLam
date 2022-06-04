package lamcuong.xyz.ChiLamAPI.Customer;

import lombok.Data;

import java.util.Date;

@Data
public class UpdateCustomerRequest {
    private String customerId;
    private String customerName;
    private String phone;
    private String address;
}
