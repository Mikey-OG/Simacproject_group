package nl.simac.examrooster.controllers;

import lombok.Data;
import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.services.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class ExamController {



    @Autowired
    private final ExamService examService;

//    public ExamController(ExamService examService) {
//        this.examService = examService;

    public ExamController(ExamService examService) {this.examService = examService;
    }

    @GetMapping("/exams")
    public ResponseEntity<List<Exam>> getAllExams() {
        List<Exam> exams = null;
        exams = examService.getAllExams();

        if(exams != null) {
            return ResponseEntity.ok().body(exams);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/exams/{id}")
    public Optional<Exam> getExam(@PathVariable("id")Integer id){
        return examService.getExamBy(id);
    }

/*
    @PostMapping("/exams")
    public ResponseEntity<Exam> createCountry(@RequestBody Exam exam) {
        if (!examService.addExam(exam)){
            String entity =  "Exam " + exam.getTitle() + " already exists.";
            return new ResponseEntity(entity, HttpStatus.CONFLICT);
        } else {
            String url = "exams" + "/" + exam.getId();
            URI uri = URI.create(url);
            return new ResponseEntity(uri,HttpStatus.CREATED);
        }
    }

 */
    @PostMapping("/exams")
    public void registerNewExam(@RequestBody Exam exam){
        examService.addExam(exam);
    }
    @DeleteMapping("/exams/{id}")
    public void deleteExam(@PathVariable("id") Integer examID){
        examService.deleteExam(examID);
    }

    @PostMapping("/exams/addLocation")
    public ResponseEntity<?>addExamLocation(@RequestBody addExamLocationForm form){
        examService.assignExamLocation(form.getExamId(), form.getLocationId());
        return ResponseEntity.ok().build();
    }

}
@Data
class addExamLocationForm {
    private  int examId;
    private  int locationId;
}
