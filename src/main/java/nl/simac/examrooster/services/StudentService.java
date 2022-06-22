package nl.simac.examrooster.services;

import lombok.AllArgsConstructor;
import nl.simac.examrooster.models.Student;
import nl.simac.examrooster.repositories.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service @AllArgsConstructor
public class StudentService {

	private final StudentRepository studentRepository;

	public List<Student> findAll(){
		return studentRepository.findAll();
	}

	public Optional<Student> findById(Integer id){
		return studentRepository.findById(id);
	}

	public Student save(Student student){
		return studentRepository.save(student);
	}
}
