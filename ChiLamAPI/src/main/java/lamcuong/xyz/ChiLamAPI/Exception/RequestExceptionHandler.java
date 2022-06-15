package lamcuong.xyz.ChiLamAPI.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class RequestExceptionHandler {
    @ExceptionHandler(BindException.class)
    public ResponseEntity<RequestExceptionResponse> handleInvalid(BindException e) {
        RequestExceptionResponse response = new RequestExceptionResponse();
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        response.setMessage("Invalid Error");
        Map<String, String> detail = new HashMap<>();
        e.getBindingResult().getFieldErrors().forEach((err) -> {
            detail.put(err.getField(), err.getDefaultMessage());
        });
        response.setErrorDetail(detail);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    @ExceptionHandler(APIException.class)
    public ResponseEntity<RequestExceptionResponse> handleAPIException(APIException e) {
        RequestExceptionResponse response = new RequestExceptionResponse();
        response.setStatus(e.httpStatus != null ? e.httpStatus.value() : HttpStatus.BAD_REQUEST.value());
        response.setMessage(e.getMessage());
        response.setErrorDetail(e.errorDetail!=null?e.errorDetail:null);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}
