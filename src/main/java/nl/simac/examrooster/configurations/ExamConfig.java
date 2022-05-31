package nl.simac.examrooster.configurations;

import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.repositories.ExamRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
@Configuration
public class ExamConfig {
    @Bean
    CommandLineRunner commandLineRunner(ExamRepository repository){
        return  args -> {
            Exam exam1 = new Exam(1,"Crane driving exam","practical","Constructions machines","17/11/2022","15:30","yard C","1 hour","Practical for cranes driving");
            Exam exam2 = new Exam(2,"Math 1","Written","Algebra","22/3/2022","09:30","Class 12","2 hours","No Calculaters allowed");

            repository.saveAll(List.of(exam1,exam2));
        };
    }
}