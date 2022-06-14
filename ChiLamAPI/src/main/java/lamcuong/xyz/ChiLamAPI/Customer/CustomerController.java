package lamcuong.xyz.ChiLamAPI.Customer;

import lamcuong.xyz.ChiLamAPI.Base.BaseController;
import lamcuong.xyz.ChiLamAPI.Base.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController extends BaseController {
    @Autowired
    CustomerService customerService;

    @GetMapping
    @CrossOrigin
    public ResponseEntity<?> GetCustomer(GetCustomerRequest getCustomerRequest) {
        BaseResponse<List<GetCustomerResponse>> result = new BaseResponse<>();
        try {
            result.content = customerService.GetCustomer(getCustomerRequest);
            result.message = "Lấy dữ liệu user thành công";
            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            result.message = e.getMessage();
            return ResponseEntity.badRequest().body(result);
        }
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<?> AddCustomer(@RequestBody AddCustomerRequest request) {
        BaseResponse<AddCustomerResponse> result = new BaseResponse<>();
        try {
            result.content = customerService.AddCustomer(request);
            result.message = "Lấy dữ liệu user thành công";
            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            result.message = e.getMessage();
            return ResponseEntity.badRequest().body(result);
        }
    }

    @PutMapping
    @CrossOrigin
    public ResponseEntity<?> UpdateCustomer(@RequestBody UpdateCustomerRequest request) {
        BaseResponse<UpdateCustomerResponse> result = new BaseResponse<>();
        try {
            result.content = customerService.UpdateCustomer(request);
            result.message = "Lấy dữ liệu user thành công";
            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            result.message = e.getMessage();
            return ResponseEntity.badRequest().body(result);
        }
    }

    @DeleteMapping
    @CrossOrigin
    public ResponseEntity<?> DeleteCustomer(@RequestBody DeleteCustomerRequest request) {
        BaseResponse<DeleteCustomerResponse> result = new BaseResponse<>();
        try {
            result.content = customerService.DeleteCustomer(request);
            result.message = "Lấy dữ liệu user thành công";
            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            result.message = e.getMessage();
            return ResponseEntity.badRequest().body(result);
        }
    }
}
