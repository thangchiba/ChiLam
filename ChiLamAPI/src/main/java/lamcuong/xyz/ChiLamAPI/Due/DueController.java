package lamcuong.xyz.ChiLamAPI.Due;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class DueController {
    @Autowired
    DueService dueService;

    @GetMapping("/due")
    @CrossOrigin
    public ResponseEntity<List<DueResponse>> GetDue() {
        List<DueResponse> result;
        result = dueService.getDue();
        return ResponseEntity.ok(result);
    }
}
