package nl.simac.examrooster.repositories;

import nl.simac.examrooster.models.Invigilator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvigilatorRepository extends JpaRepository<Invigilator, Integer> {
}
