package lamcuong.xyz.ChiLamAPI.Customer;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetCustomerRequest {
    private String customerId;
    private Integer itemPerPage;
    private Integer page;
    private String orderBy;
}
