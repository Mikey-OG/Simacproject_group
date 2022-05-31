package nl.simac.examrooster.models;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="location")
public class Location {
    @Id
    @GeneratedValue
    @Getter
    @Setter
    @NotNull
    @Column(name = "id", unique = true)
    private int id;

    @Getter@Setter
    @Column(name = "code" )
    private String code;

    @Getter@Setter
    @Column(name = "capacity" )
    private int capacity;


    //need to be replaced by a list<opject> or list<enum>
   // private List<ExamTool> Etools;
    @Getter@Setter
    @Column(name = "etools" )
    private String etools;
/*
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "location")
    private Set<Exam> exams;
 */
    /*
    public Location(int id, String code, int capacity, String etools) {
        this.id = id;
        this.code = code;
        this.capacity = capacity;
        this.etools = etools;
    }

     */
    @Override
    public String toString() {
        return "Location{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", capacity=" + capacity + '\'' +
                ", etools='" + etools + '\'' +
                '}';
    }


}
