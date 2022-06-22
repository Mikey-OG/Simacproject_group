package nl.simac.examrooster.configurations;

import nl.simac.examrooster.models.Invigilator;
import nl.simac.examrooster.repositories.InvigilatorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Configuration
public class InvigilatorConfig {
	@Bean
	CommandLineRunner invigilatorCommandLineRunner (InvigilatorRepository invigilatorRepository){
		return args -> {
			/*
			Invigilator invigilator1 = new Invigilator("Rawan", "omar@invigilator.com", "12/03/1994", "0124897254");
			Invigilator invigilator2 = new Invigilator("Kevin", "Kevin@invigilator.com", "12/03/1994", "0124897254");
			Invigilator invigilator3 = new Invigilator("Nour", "Nour@invigilator.com", "12/03/1994", "0124897254");
			Invigilator invigilator4 = new Invigilator("Ranim", "Ranim@invigilator.com", "12/03/1994", "0124897254");
			Invigilator invigilator5 = new Invigilator("Stan", "Stan@invigilator.com", "12/03/1994", "0124897254");
			Invigilator invigilator6 = new Invigilator("Rick", "Rick@invigilator.com", "12/03/1994", "0124897254");
			Invigilator invigilator7 = new Invigilator("Jack", "Jack@invigilator.com", "12/03/1994", "0124897254");
			Invigilator invigilator8 = new Invigilator("Kate", "Kate@invigilator.com", "12/03/1994", "0124897254");
			Invigilator invigilator9 = new Invigilator("John", "John@invigilator.com", "12/03/1994", "0124897254");
			Invigilator invigilator10 = new Invigilator("Jim", "Jim@invigilator.com", "12/03/1994", "0124897254");

			List<Invigilator> invigilators = new ArrayList<>();
			Collections.addAll(invigilators, invigilator1, invigilator2, invigilator3, invigilator4, invigilator5, invigilator6, invigilator7, invigilator8, invigilator9, invigilator10);

			invigilatorRepository.saveAll(invigilators);

			 */
		};
	}
}
