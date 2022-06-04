package lamcuong.xyz.ChiLamAPI.Customer;

import lamcuong.xyz.ChiLamAPI.Base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController extends BaseController {
    @Autowired
    CustomerService customerService;

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<GetCustomerResponse>> GetCustomer(GetCustomerRequest getCustomerRequest) {
        List<GetCustomerResponse> result;
        result = customerService.GetCustomer(getCustomerRequest);
        return ResponseEntity.ok(result);
    }
    @PostMapping
    @CrossOrigin
    public ResponseEntity<AddCustomerResponse> AddCustomer(@RequestBody AddCustomerRequest request) {
        AddCustomerResponse result;
        result = customerService.AddCustomer(request);
        return ResponseEntity.ok(result);
    }
    @PutMapping
    @CrossOrigin
    public ResponseEntity<UpdateCustomerResponse> UpdateCustomer(@RequestBody UpdateCustomerRequest request) {
        UpdateCustomerResponse result;
        result = customerService.UpdateCustomer(request);
        return ResponseEntity.ok(result);
    }
}
