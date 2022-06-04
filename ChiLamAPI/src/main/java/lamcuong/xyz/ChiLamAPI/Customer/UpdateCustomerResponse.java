package lamcuong.xyz.ChiLamAPI.Customer;

import lombok.Data;

import java.util.Date;

@Data
public class UpdateCustomerResponse {
    private String customerId;
    private String customerName;
    private String phone;
    private String address;
    private Long totalMoney;
    private Date lastPayDate;
    private Date createDate;
    private Date updateDate;
    private Boolean delFlg;
}
