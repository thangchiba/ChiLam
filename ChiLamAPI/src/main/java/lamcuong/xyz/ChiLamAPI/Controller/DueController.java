package lamcuong.xyz.ChiLamAPI.Controller;

import lamcuong.xyz.ChiLamAPI.Model.Due;
import lamcuong.xyz.ChiLamAPI.Service.DueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class DueController {
    @Autowired
    DueService dueService;

    @GetMapping("/due")
    @CrossOrigin
    public ResponseEntity<List<Due>> GetDue() {
        List<Due> result;
        result = dueService.getDue();
        return ResponseEntity.ok(result);
    }
}
