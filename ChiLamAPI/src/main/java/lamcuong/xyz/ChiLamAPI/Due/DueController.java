package lamcuong.xyz.ChiLamAPI.Due;

import lamcuong.xyz.ChiLamAPI.Base.BaseResponse;
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
    public ResponseEntity<?> GetDue(GetDueRequest getDueRequest) {
        BaseResponse<List<GetDueResponse>> result = new BaseResponse<>();
        try {
            result.content = dueService.getDue(getDueRequest);
            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            result.message = e.getMessage();
            return ResponseEntity.badRequest().body(result);
        }
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<?> AddDue(@RequestBody AddDueRequest request) {
        BaseResponse<AddDueResponse> result = new BaseResponse<>();
        try {
            result.content = dueService.AddDue(request);
            result.message = "Thêm dữ giao dịch thành công";
            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            result.message = e.getMessage();
            return ResponseEntity.badRequest().body(result);
        }
    }
//    @PutMapping
//    @CrossOrigin
//    public ResponseEntity<UpdateCustomerResponse> UpdateCustomer(@RequestBody UpdateCustomerRequest request) {
//        UpdateCustomerResponse result;
//        result = customerService.UpdateCustomer(request);
//        return ResponseEntity.ok(result);
//    }
    @DeleteMapping
    @CrossOrigin
    public ResponseEntity<?> DeleteDue(@RequestBody DeleteDueRequest request) {
        BaseResponse<DeleteDueResponse> result = new BaseResponse<>();
        try {
            result.content = dueService.DeleteDue(request);
            result.message = "Xóa dữ liệu giao dịch thành công";
            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            result.message = e.getMessage();
            return ResponseEntity.badRequest().body(result);
        }
    }
}
