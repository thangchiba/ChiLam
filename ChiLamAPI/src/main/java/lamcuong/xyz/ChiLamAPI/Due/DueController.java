package lamcuong.xyz.ChiLamAPI.Due;

import lamcuong.xyz.ChiLamAPI.Customer.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/due")
public class DueController {
    @Autowired
    DueService dueService;

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<GetDueResponse>> GetDue(GetDueRequest getDueRequest) {
        List<GetDueResponse> result;
        result = dueService.getDue(getDueRequest);
        return ResponseEntity.ok(result);
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<AddDueResponse> AddCustomer(@RequestBody AddDueRequest request) {
        AddDueResponse result;
        result = dueService.AddDue(request);
        return ResponseEntity.ok(result);
    }
//    @PutMapping
//    @CrossOrigin
//    public ResponseEntity<UpdateCustomerResponse> UpdateCustomer(@RequestBody UpdateCustomerRequest request) {
//        UpdateCustomerResponse result;
//        result = customerService.UpdateCustomer(request);
//        return ResponseEntity.ok(result);
//    }
//    @DeleteMapping
//    @CrossOrigin
//    public ResponseEntity<DeleteCustomerResponse> DeleteCustomer(@RequestBody DeleteCustomerRequest request) {
//        DeleteCustomerResponse result;
//        result = customerService.DeleteCustomer(request);
//        return ResponseEntity.ok(result);
//    }
}
