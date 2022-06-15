package lamcuong.xyz.ChiLamAPI.Trade;

import lamcuong.xyz.ChiLamAPI.Base.BaseResponse;
import lamcuong.xyz.ChiLamAPI.Due.DeleteDueResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/trade")
public class TradeController {
    @Autowired
    TradeService tradeService;

    @GetMapping
    @CrossOrigin
    public ResponseEntity<?> GetTrade(@Valid GetTradeRequest request) throws Exception {
        BaseResponse<List<GetTradeResponse>> result = new BaseResponse<>();
        result.content = tradeService.GetTrade(request);
        result.message = "Lấy dữ liệu giao dịch thành công";
        return ResponseEntity.ok().body(result);
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<?> AddTrade(@Valid @RequestBody AddTradeRequest request) throws Exception {
        BaseResponse<AddTradeResponse> result = new BaseResponse<>();
        result.content = tradeService.AddTrade(request);
        result.message = "Thêm dữ liệu giao dịch thành công";
        return ResponseEntity.ok().body(result);
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
    public ResponseEntity<?> DeleteTrade(@RequestBody DeleteTradeRequest request) throws Exception {
        BaseResponse<DeleteTradeResponse> result = new BaseResponse<>();
        result.content = tradeService.DeleteTrade(request);
        result.message = "Xóa dữ liệu giao dịch thành công";
        return ResponseEntity.ok().body(result);
    }
}
