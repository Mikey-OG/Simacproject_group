package nl.simac.examrooster.services;

import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.repositories.ExamRepository;
import nl.simac.examrooster.repositories.FakeExamData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExamService {

   private final ExamRepository examRepository;
    @Autowired
    public ExamService(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }




    public List<Exam> getAllExams(){
        return examRepository.findAll();
    }


    public Optional<Exam> getExamBy(Integer id) {
        boolean exists = examRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("exam with id "+ id +" doest not exists");
        }
        return examRepository.findById(id);
    }
    /*
    public boolean addExam(Exam exam){
        boolean exists = examRepository.existsById(exam.getId());
        if(!exists) {
            throw new IllegalStateException("exam with id "+ exam.getId() +" does already exists");
        }else {
            examRepository.save(exam);
            return  true;
        }
        }
*/

    public void addExam(Exam exam) {

        // Optional<Product> productOptional =productRepository.findProductBySku(product.getSku());
        // if(productOptional.isPresent()){
        //    throw new IllegalStateException("SKU taken");
        // }
        examRepository.save(exam);
    }

    public void deleteExam(Integer examID) {
        boolean exists = examRepository.existsById(examID);
        if(!exists) {
            throw new IllegalStateException("Exam with id "+ examID +" doest not exists");
        }
        examRepository.deleteById(examID);
    }

}
