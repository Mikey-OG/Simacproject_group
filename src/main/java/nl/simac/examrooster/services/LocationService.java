package nl.simac.examrooster.services;

import lombok.AllArgsConstructor;
import nl.simac.examrooster.models.Location;
import nl.simac.examrooster.repositories.LocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service @AllArgsConstructor
public class LocationService {

	private final LocationRepository locationRepository;

	public List<Location> findAll(){
		return locationRepository.findAll();
	}

	public Optional<Location> findById(Integer id){
		return locationRepository.findById(id);
	}

	public Location save(Location location){
		return locationRepository.save(location);
	}

}
