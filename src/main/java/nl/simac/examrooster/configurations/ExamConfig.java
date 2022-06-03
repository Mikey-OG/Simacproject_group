package nl.simac.examrooster.configurations;

import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.models.Location;
import nl.simac.examrooster.repositories.ExamRepository;
import nl.simac.examrooster.repositories.LocationRepository;
import nl.simac.examrooster.services.ExamService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;




@Configuration
public class ExamConfig {
    @Bean
    CommandLineRunner locationCommandLineRunner(LocationRepository locationRepository) {
        return args -> {
            Location location1 = new Location(1, "C2", 10, "PC");
            Location location2 = new Location(2, "Yard B", 2, "Crane");

            locationRepository.saveAll(List.of(location1, location2));
        };
    }



    @Bean
    CommandLineRunner commandLineRunner(ExamRepository examerepository, LocationRepository locationRepository, ExamService examService){
        return  args -> {
            /*
            Location location1 = new Location(1,"C2",10,"PC");
            Location location2 = new Location(2,"Yard B",2,"Crane");

            locationRepository.saveAll(List.of(location1,location2));

             */
            Exam exam1 = new Exam(1,"Crane driving exam","practical","Constructions machines","17/11/2022 15:30",null,"1 hour","Practical for cranes driving");
            Exam exam2 = new Exam(2,"Math 1","Written","Algebra","22/3/2022 09:30",null,"2 hours","No Calculaters allowed");
            Exam f = new Exam(3,"Math 1","Written","Algebra","22/3/2022 09:30",null,"2 hours","No Calculaters allowed");
            Exam a = new Exam( 4,"CDI", "practical", "crane driving", "17/04/2022 13:00 PM", null, "2 hours", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            Exam b = new Exam( 5,"second exam", "written", "math 2", "130/04/2022 11:00 AM", null, "2 hours", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            Exam c = new Exam( 6,"calculus", "lab", "Chemistry 3", "06/05/2022 9:00 AM", null, "1 hour", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            Exam d = new Exam( 7,"biology 1", "online", "biology", "17/04/2002 13:00", null, "2 hours", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            examerepository.saveAll(List.of(exam1,exam2,f,a,b,c,d));
            examService.assignExamLocation(5,1);


        };
    }
}