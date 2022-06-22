package nl.simac.examrooster.services;

import lombok.AllArgsConstructor;
import nl.simac.examrooster.models.Invigilator;
import nl.simac.examrooster.repositories.InvigilatorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service @AllArgsConstructor
public class InvigilatorService {

	private final InvigilatorRepository invigilatorRepository;

	public List<Invigilator> findAll(){
		return invigilatorRepository.findAll();
	}

	public Optional<Invigilator> findById(Integer id){
		return invigilatorRepository.findById(id);
	}

	public Invigilator save(Invigilator invigilator){
		return invigilatorRepository.save(invigilator);
	}
}
