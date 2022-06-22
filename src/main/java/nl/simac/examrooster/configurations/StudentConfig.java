package nl.simac.examrooster.configurations;

import nl.simac.examrooster.models.Student;
import nl.simac.examrooster.repositories.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Configuration
public class StudentConfig {
	@Bean
	CommandLineRunner studentCommandLineRunner (StudentRepository studentRepository){
		return args -> {
			/*
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

			 */
		};
	}
}
