package nl.simac.examrooster.models;


import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="location")
public class Location {
    @Id
    @GeneratedValue
    @NotNull
    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "address")
    private String address;

    @Column(name = "postcode" )
    private String postcode;

    @Column(name = "capacity" )
    private int capacity;


    //need to be replaced by a list<opject> or list<enum>
   // private List<ExamTool> Etools;
    @Column(name = "tools" )
    private String tools;

    public Location(String address, String postcode, int capacity, String tools) {
        this.address = address;
        this.postcode = postcode;
        this.capacity = capacity;
        this.tools = tools;
    }

}
