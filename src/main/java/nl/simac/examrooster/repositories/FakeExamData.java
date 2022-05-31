package nl.simac.examrooster.repositories;

import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.models.Location;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Repository
public class FakeExamData {

    private final List<Exam> exams = new ArrayList<>();

    public FakeExamData() {
        Exam a = new Exam( "CDI", "practical", "crane driving", "17/04/2022", "13:00 PM", null, "2 hours", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        Exam b = new Exam( "second exam", "written", "math 2", "130/04/2022", "11:00 AM", null, "2 hours", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        Exam c = new Exam( "calculus", "lab", "Chemistry 3", "06/05/2022", "9:00 AM", null, "1 hour", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        Exam d = new Exam( "biology 1", "online", "biology", "17/04/2022", "13:00", null, "2 hours", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

        Collections.addAll(exams, a, b, c, d);
    }

    public List<Exam> getAllExams() {
        return exams;
    }

    public Exam getExamBy(int id){
        for (Exam exam : exams) {
            if (exam.getId() == id) {
                return exam;
            }
        }
        return null;
    }

    public boolean addExam(Exam exam){
        if(this.getExamBy(exam.getId()) != null){
            return false;
        }
        exams.add(exam);
        return true;
    }
}
