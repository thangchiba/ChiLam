package lamcuong.xyz.ChiLamAPI.Exception;

import org.springframework.http.HttpStatus;

import java.util.Map;

public class APIException extends Exception{
    HttpStatus httpStatus;
    Map<String,String> errorDetail;
    public APIException(String message) {
        super(message);
    }
    public APIException(String message,HttpStatus httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }
    public APIException(String message,HttpStatus httpStatus,Map<String,String> errorDetail) {
        super(message);
        this.httpStatus = httpStatus;
        this.errorDetail = errorDetail;
    }



    public APIException(String message, Throwable cause) {
        super(message, cause);
    }
}
