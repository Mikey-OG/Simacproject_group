package nl.simac.examrooster.configurations;

import nl.simac.examrooster.models.Exam;
import nl.simac.examrooster.models.Invigilator;
import nl.simac.examrooster.models.Location;
import nl.simac.examrooster.models.Student;
import nl.simac.examrooster.repositories.ExamRepository;
import nl.simac.examrooster.repositories.InvigilatorRepository;
import nl.simac.examrooster.repositories.LocationRepository;
import nl.simac.examrooster.repositories.StudentRepository;
import nl.simac.examrooster.services.ExamService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@Configuration
public class ExamConfig {

    @Bean
    CommandLineRunner commandLineRunner(ExamRepository examerepository, LocationRepository locationRepository, ExamService examService, StudentRepository studentRepository, InvigilatorRepository invigilatorRepository){
        return  args -> {
            /*
            Location location1 = new Location(1,"C2",10,"PC");
            Location location2 = new Location(2,"Yard B",2,"Crane");

            locationRepository.saveAll(List.of(location1,location2));

             */
            Invigilator invigilator1 = new Invigilator("Rawan", "omar@invigilator.com", "12/03/1994", "0124897254");
            Invigilator invigilator2 = new Invigilator("Kevin", "Kevin@invigilator.com", "12/03/1994", "0124897254");
            Invigilator invigilator3 = new Invigilator("Nour", "Nour@invigilator.com", "12/03/1994", "0124897254");
            Invigilator invigilator4 = new Invigilator("Ranim", "Ranim@invigilator.com", "12/03/1994", "0124897254");
            Invigilator invigilator5 = new Invigilator("Stan", "Stan@invigilator.com", "12/03/1994", "0124897254");
            Invigilator invigilator6 = new Invigilator("Rick", "Rick@invigilator.com", "12/03/1994", "0124897254");
            Invigilator invigilator7 = new Invigilator("Jack", "Jack@invigilator.com", "12/03/1994", "0124897254");
            Invigilator invigilator8 = new Invigilator("Kate", "Kate@invigilator.com", "12/03/1994", "0124897254");
            Invigilator invigilator9 = new Invigilator("John", "John@invigilator.com", "12/03/1994", "0124897254");
            Invigilator invigilator10 = new Invigilator("Jim", "Jim@invigilator.com", "12/03/1994", "0124897254");

            List<Invigilator> invigilators = new ArrayList<>();
            Collections.addAll(invigilators, invigilator1, invigilator2, invigilator3, invigilator4, invigilator5, invigilator6, invigilator7, invigilator8, invigilator9, invigilator10);

            invigilatorRepository.saveAll(invigilators);

            Location location1 = new Location("Snow 10", "4937LL", 35, "PC" );
            Location location2 = new Location("Snow 14", "4943LL",  25, "Crane");
            Location location3 = new Location("Snow 13", "4326LL", 45, "Carpentry tools" );
            Location location4 = new Location("Snow 15", "7834LL",  37, "Carpentry tools, Crane" );
            Location location5 = new Location("Snow 123", "4943LL",  25, "Crane");

            List<Location> locations = new ArrayList<>();
            Collections.addAll(locations, location1, location2, location3, location4, location5);

            locationRepository.saveAll(locations);



            Student student1 = new Student("Rawan", "rawan@student.com", "12/03/1994", "0124897254");
            Student student2 = new Student("Kevin", "Kevin@student.com", "12/03/1994", "0124897254");
            Student student3 = new Student("Nour", "Nour@student.com", "12/03/1994", "0124897254");
            Student student4 = new Student("Ranim", "Ranim@student.com", "12/03/1994", "0124897254");
            Student student5 = new Student("Stan", "Stan@student.com", "12/03/1994", "0124897254");
            Student student6 = new Student("Rick", "Rick@student.com", "12/03/1994", "0124897254");
            Student student7 = new Student("Jack", "Jack@student.com", "12/03/1994", "0124897254");
            Student student8 = new Student("Kate", "Kate@student.com", "12/03/1994", "0124897254");
            Student student9 = new Student("John", "John@student.com", "12/03/1994", "0124897254");
            Student student10 = new Student("Jim", "Jim@student.com", "12/03/1994", "0124897254");

            List<Student> students = new ArrayList<>();
            Collections.addAll(students, student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);
            studentRepository.saveAll(students);



            List<Invigilator> invigilatorsA = new ArrayList<>();
            Collections.addAll(invigilatorsA, invigilator1, invigilator2);

            List<Student> studentsA = new ArrayList<>();
            Collections.addAll(studentsA, student1, student2);

            List<Invigilator> invigilatorsB = new ArrayList<>();
            Collections.addAll(invigilatorsB, invigilator3,invigilator10);

            List<Student> studentsB = new ArrayList<>();
            Collections.addAll(studentsB, student1, student2, student6, student5);

            Exam exam1 = new Exam("Crane driving exam","practical","Constructions machines","17/11/2022 15:30",location1,"1 hour","Practical for cranes driving",students,invigilators);
            Exam exam2 = new Exam("Math 1","Written","Algebra","22/3/2022 09:30",location2,"2 hours","No Calculaters allowed",studentsB,invigilatorsA);
            Exam f = new Exam("Math 1","Written","Algebra","22/3/2022 09:30",null,"2 hours","No Calculaters allowed",studentsB,invigilatorsB);
            Exam a = new Exam( "CDI", "practical", "crane driving", "17/04/2022 13:00 PM", null, "2 hours", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",studentsA,invigilatorsA);
            Exam b = new Exam( "second exam", "written", "math 2", "130/04/2022 11:00 AM", null, "2 hours", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",studentsA,invigilatorsA);
            Exam c = new Exam( "calculus", "lab", "Chemistry 3", "06/05/2022 9:00 AM", null, "1 hour", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",studentsB,invigilatorsB);
            Exam d = new Exam( "biology 1", "online", "biology", "17/04/2002 13:00", null, "2 hours", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,",studentsA,invigilatorsB);
            examerepository.saveAll(List.of(exam1,exam2,f,a,b,c,d));
           // examService.assignExamLocation(5,1);



        };
    }
}