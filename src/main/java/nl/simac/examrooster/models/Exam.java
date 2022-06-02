package nl.simac.examrooster.models;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity
@Table(name="exam")
public class Exam {
    @Id
    @GeneratedValue
    @NotNull
    @Column(name = "id", unique = true)
    private int id;
    @Column(name = "title" )
    private String title;
    @Column(name = "type" )
    private String type;
    @Column(name = "subject" )
    private String subject;
//    private LocalDateTime dateTime;
    @Column(name = "date_time" )
    private String dateTime;
//    @Column(name = "time" )
//    private String time;
    @ManyToOne
    @JoinColumn(name="location_id")
    private Location location;

    @Column(name = "duration" )
    private String duration;
    @Column(name = "description" )
    private String description;



//    public Exam( String title, String type, String subject, String date, String time, Location location, String duration, String description) {
//
//        this.title = title;
//        this.type = type;
//        this.subject = subject;
//        this.date = date;
//        this.time = time;
//        this.location=location;
//        this.duration = duration;
//        this.description = description;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public String getType() {
//        return type;
//    }
//
//    public void setType(String type) {
//        this.type = type;
//    }
//
//    public String getSubject() {
//        return subject;
//    }
//
//    public void setSubject(String subject) {
//        this.subject = subject;
//    }
//
//    public String getDate() {
//        return date;
//    }
//
//    public void setDate(String date) {
//        this.date = date;
//    }
//
//    public String getTime() {
//        return time;
//    }
//
//    public void setTime(String time) {
//        this.time = time;
//    }
//
//    public Location getLocation() {
//        return location;
//    }
//
//    public void setLocation(Location location) {
//        this.location = location;
//    }
//
//    public String getDuration() {
//        return duration;
//    }
//
//    public void setDuration(String duration) {
//        this.duration = duration;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    @Override
//    public String toString() {
//        return "Exam{" +
//                "id=" + id +
//                ", title='" + title + '\'' +
//                ", type=" + type + '\'' +
//                ", subject='" + subject + '\'' +
//                ", date='" + date + '\'' +
//                ", time='" + time + '\'' +
//                ", location='" + location + '\'' +
//                ", duration='" + duration + '\'' +
//                ", description='" + description +
//                '}';
//    }
}

