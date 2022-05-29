package lamcuong.xyz.ChiLamAPI.Customer;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetCustomerResponse {
    private String customerId;
    private String customerName;
    private String phone;
    private String address;
    private Long totalMoney;
    private java.sql.Date lastPayDate;
    private java.sql.Date createDate;
    private java.sql.Date updateDate;
    private String delFlg;
}
