package nl.simac.examrooster.configurations;


import nl.simac.examrooster.models.Location;
import nl.simac.examrooster.repositories.ExamRepository;
import nl.simac.examrooster.repositories.LocationRepository;
import nl.simac.examrooster.services.ExamService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class LocationConfig {
    /*
    @Bean
    CommandLineRunner locationCommandLineRunner(LocationRepository locationRepository) {
        return args -> {
            Location location1 = new Location(1, "C2", 10, "PC");
            Location location2 = new Location(2, "Yard B", 2, "Crane");

            locationRepository.saveAll(List.of(location1, location2));
        };
    }
*/


}