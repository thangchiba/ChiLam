package lamcuong.xyz.ChiLamAPI.Due;

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
}
