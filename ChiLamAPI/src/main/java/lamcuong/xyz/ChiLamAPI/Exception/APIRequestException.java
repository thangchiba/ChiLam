package lamcuong.xyz.ChiLamAPI.Exception;

public class APIRequestException extends Exception{
    public APIRequestException(String message) {
        super(message);
    }

    public APIRequestException(String message, Throwable cause) {
        super(message, cause);
    }
}
