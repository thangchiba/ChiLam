package lamcuong.xyz.ChiLamAPI.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<GetCustomerResponse>> GetCustomer(GetCustomerRequest getCustomerRequest) {
        List<GetCustomerResponse> result;
        result = customerService.getCustomer(getCustomerRequest);
        return ResponseEntity.ok(result);
    }
}
