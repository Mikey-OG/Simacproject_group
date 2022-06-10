package nl.simac.examrooster.models;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@NoArgsConstructor @AllArgsConstructor @Data @ToString
@Entity
@Table(name="student")
public class Student {
//	public id: number, public name: string, public email: string, public dob: Date, public phonenumber: string
	@Id
	@GeneratedValue
	@NotNull
	@Column(name = "id", unique = true)
	private Integer id;

	@Column(name = "name" )
	private String name;
	@Column(
		name = "email",
		nullable = false,
		columnDefinition = "TEXT",
		unique = true
	)
	private String email;
	@Column(name = "dob" )
	private String dob;
	@Column(name = "phonenumber" )
	private String phonenumber;

	public Student(String name, String email, String dob, String phonenumber) {
		this.name = name;
		this.email = email;
		this.dob = dob;
		this.phonenumber = phonenumber;
	}
}
