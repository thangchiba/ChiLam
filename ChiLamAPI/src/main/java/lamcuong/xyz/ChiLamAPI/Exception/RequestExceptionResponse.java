package lamcuong.xyz.ChiLamAPI.Exception;

import lombok.Data;

import java.util.Map;

@Data
public class RequestExceptionResponse {
    private Integer status;
    private String message;
    private Map<String,String> invalidDetail;
}

