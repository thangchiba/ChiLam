package lamcuong.xyz.ChiLamAPI.Trade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/trade")
public class TradeController {
    @Autowired
    TradeService tradeService;

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<GetTradeResponse>> GetTrade(GetTradeRequest getTradeRequest) {
        List<GetTradeResponse> result;
        result = tradeService.GetTrade(getTradeRequest);
        return ResponseEntity.ok(result);
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<AddTradeResponse> AddTrade(@RequestBody AddTradeRequest request) {
        AddTradeResponse result;
        result = tradeService.AddTrade(request);
        return ResponseEntity.ok(result);
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
    public ResponseEntity<DeleteTradeResponse> DeleteCustomer(@RequestBody DeleteTradeRequest request) {
        DeleteTradeResponse result;
        result = tradeService.DeleteTrade(request);
        return ResponseEntity.ok(result);
    }
}
