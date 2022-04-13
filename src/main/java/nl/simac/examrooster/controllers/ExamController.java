package nl.simac.examrooster.controllers;

import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.services.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
public class ExamController {

    @Autowired
    private ExamService examService;

//    public ExamController(ExamService examService) {
//        this.examService = examService;
//    }

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
    private ResponseEntity<Exam> getSiteBy(@PathVariable int id){
        Exam exam = null;
        exam = examService.getExamBy(id);

        if(exam != null) {
            return ResponseEntity.ok().body(exam);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

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
}
