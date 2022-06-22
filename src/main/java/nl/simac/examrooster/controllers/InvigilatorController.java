package nl.simac.examrooster.controllers;

import lombok.AllArgsConstructor;
import nl.simac.examrooster.models.Invigilator;
import nl.simac.examrooster.services.InvigilatorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/invigilators")
@CrossOrigin(origins = "http://localhost:3000")
public class InvigilatorController {

	private final InvigilatorService invigilatorService;

	@GetMapping("")
	public ResponseEntity<List<Invigilator>> getAllInvigilators() {
		List<Invigilator> invigilators = null;
		invigilators = invigilatorService.findAll();

		if(invigilators != null) {
			return ResponseEntity.ok().body(invigilators);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Invigilator> GetInvigilator(@PathVariable(value = "id", required = false) int id) {
		Optional<Invigilator> invigilator = invigilatorService.findById(id);

		if(invigilator.isPresent()) {
			return ResponseEntity.ok().body(invigilator.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
