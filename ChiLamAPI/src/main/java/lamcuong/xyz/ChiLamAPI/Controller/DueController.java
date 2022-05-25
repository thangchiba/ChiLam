package lamcuong.xyz.ChiLamAPI.Controller;

import lamcuong.xyz.ChiLamAPI.Service.ProductThumbnailsService;
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
    ProductThumbnailsService productThumbnailsService;

    @GetMapping("/due")
    @CrossOrigin
    public ResponseEntity<String> GetDue() {
        return ResponseEntity.ok("Heloo babe");
    }
}
