package nl.simac.examrooster.services;

import lombok.extern.slf4j.Slf4j;
import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.models.Location;
import nl.simac.examrooster.repositories.ExamRepository;
import nl.simac.examrooster.repositories.FakeExamData;
import nl.simac.examrooster.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.XSlf4j;

import java.util.List;
import java.util.Optional;

@Service
public class ExamService {

   private final ExamRepository examRepository;
   private final LocationRepository locationRepository;
    @Autowired
    public ExamService(ExamRepository examRepository, LocationRepository locationRepository) {
        this.examRepository = examRepository;
        this.locationRepository=locationRepository;
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
    public Optional<Location> getLocationBy(Integer id) {
        boolean exists = locationRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("location with id "+ id +" doest not exists");
        }
        return locationRepository.findById(id);
    }

    public void addLocation(Location location) {

        // Optional<Product> productOptional =productRepository.findProductBySku(product.getSku());
        // if(productOptional.isPresent()){
        //    throw new IllegalStateException("SKU taken");
        // }
        locationRepository.save(location);
    }
    public List<Location> getAllLocations(){
        return locationRepository.findAll();
    }

    public void deleteLocation(Integer locationID) {
        boolean exists = locationRepository.existsById(locationID);
        if(!exists) {
            throw new IllegalStateException("Location with id "+ locationID +" doest not exists");
        }
        locationRepository.deleteById(locationID);
    }

    public void assignExamLocation(int examID, int locationID) {
        //Log.info("Assigning exam{} to location{}",examID,locationID);
        Exam exam = examRepository.findById(examID);
        Location location= locationRepository.findById(locationID);
        exam.setLocation(location);
        examRepository.save(exam);

    }

}
