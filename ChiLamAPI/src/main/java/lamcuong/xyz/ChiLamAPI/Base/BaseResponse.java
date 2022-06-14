package lamcuong.xyz.ChiLamAPI.Base;

import lombok.Data;

public class BaseResponse<T> {
    public String message;
    public T content;
}
