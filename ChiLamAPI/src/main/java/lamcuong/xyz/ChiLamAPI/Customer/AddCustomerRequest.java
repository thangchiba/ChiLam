package lamcuong.xyz.ChiLamAPI.Customer;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class AddCustomerRequest {
    private String customerName;
    private String phone;
    private String address;
    private Long totalMoney;
    private LocalDateTime lastPayDate;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private Boolean delFlg;
}
