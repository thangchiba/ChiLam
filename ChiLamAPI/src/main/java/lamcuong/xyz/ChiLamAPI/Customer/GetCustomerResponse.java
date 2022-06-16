package lamcuong.xyz.ChiLamAPI.Customer;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class GetCustomerResponse {
    private String customerId;
    private String customerName;
    private String phone;
    private String address;
    private Long totalMoney;
    private LocalDateTime lastPayDate;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private String delFlg;
}
