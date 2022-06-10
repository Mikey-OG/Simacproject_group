package nl.simac.examrooster.controllers;

import lombok.AllArgsConstructor;
import nl.simac.examrooster.models.Student;
import nl.simac.examrooster.services.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController @AllArgsConstructor
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

	private final StudentService studentService;

	@GetMapping("")
	public ResponseEntity<List<Student>> getAllStudents() {
		List<Student> students = null;
		students = studentService.findAll();

		if(students != null) {
			return ResponseEntity.ok().body(students);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Student> GetUser(@PathVariable(value = "id", required = false) int id) {
		Optional<Student> student = studentService.findById(id);

		if(student.isPresent()) {
			return ResponseEntity.ok().body(student.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
