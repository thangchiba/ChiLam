package lamcuong.xyz.ChiLamAPI.Due;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
