package nl.simac.examrooster.configurations;


import nl.simac.examrooster.models.Location;
import nl.simac.examrooster.repositories.ExamRepository;
import nl.simac.examrooster.repositories.LocationRepository;
import nl.simac.examrooster.services.ExamService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Configuration
public class LocationConfig {

    @Bean
    CommandLineRunner locationCommandLineRunner(LocationRepository locationRepository) {
        return args -> {
/*
            Location location1 = new Location("Snow 10", "4937LL", 35, "PC" );
            Location location2 = new Location("Snow 14", "4943LL",  25, "Crane");
            Location location3 = new Location("Snow 13", "4326LL", 45, "Carpentry tools" );
            Location location4 = new Location("Snow 15", "7834LL",  37, "Carpentry tools, Crane" );
            Location location5 = new Location("Snow 123", "4943LL",  25, "Crane");

			List<Location> locations = new ArrayList<>();
	        Collections.addAll(locations, location1, location2, location3, location4, location5);

            locationRepository.saveAll(locations);

 */
        };
    }



}