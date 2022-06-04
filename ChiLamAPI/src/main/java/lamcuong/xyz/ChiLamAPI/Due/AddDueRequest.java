package lamcuong.xyz.ChiLamAPI.Due;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class AddDueRequest {
    private String customerId;
    private Long money;
    private LocalDateTime createDate;
}
