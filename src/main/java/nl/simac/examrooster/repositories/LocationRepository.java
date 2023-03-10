package nl.simac.examrooster.repositories;

import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LocationRepository extends JpaRepository<Location,Integer> {
    Location findById(int id);

    public Optional<Location> findByCapacity(int capacity);
}
