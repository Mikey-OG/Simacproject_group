package nl.simac.examrooster.services;

import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.repositories.FakeExamData;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {

    private final FakeExamData fakeExamData;

    public ExamService(FakeExamData fakeExamData) {
        this.fakeExamData = fakeExamData;
    }

    public List<Exam> getAllExams(){
        return fakeExamData.getAllExams();
    }

    public Exam getExamBy(int id){
        return fakeExamData.getExamBy(id);
    }

    public boolean addExam(Exam exam){
        return fakeExamData.addExam(exam);
    }
}
