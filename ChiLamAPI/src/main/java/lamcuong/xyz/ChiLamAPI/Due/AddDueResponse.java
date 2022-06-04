package lamcuong.xyz.ChiLamAPI.Due;

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
}
