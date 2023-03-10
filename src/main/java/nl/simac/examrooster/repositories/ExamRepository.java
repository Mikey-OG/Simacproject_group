package nl.simac.examrooster.repositories;


import nl.simac.examrooster.models.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamRepository extends JpaRepository <Exam, Integer> {
    Exam findById(int id);

}
