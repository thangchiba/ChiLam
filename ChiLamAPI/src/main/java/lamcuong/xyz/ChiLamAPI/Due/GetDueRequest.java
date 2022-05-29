package lamcuong.xyz.ChiLamAPI.Due;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class GetDueRequest {
    private String dueId;
    private String customerId;
    private Date fromDate;
    private Date toDate;
}
