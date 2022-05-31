package nl.simac.examrooster.controllers;


import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.models.Location;
import nl.simac.examrooster.services.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LocationController {

    @Autowired
    private final ExamService examService;


    public LocationController(ExamService examService) {this.examService = examService;
    }

    @GetMapping("/locations")
    public ResponseEntity<List<Location>> getAllLocations() {
        List<Location> locations = null;
        locations = examService.getAllLocations();

        if(locations != null) {
            return ResponseEntity.ok().body(locations);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/ocations/{id}")
    public Optional<Location> getLocation(@PathVariable("id")Integer id){
        return examService.getLocationBy(id);
    }

    @PostMapping("/locations")
    public void registerNewExam(@RequestBody Location location){
        examService.addLocation(location);
    }
    @DeleteMapping("/locations/{id}")
    public void deleteExam(@PathVariable("id") Integer locationID){
        examService.deleteLocation(locationID);
    }

}
