package nl.simac.examrooster.models;

import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;


public class Exam {
    private int id;
    private String title;
    private String type;
    private String subject;
//    private LocalDateTime dateTime;
    private String date;
    private String time;
    private String location;
    private String duration;
    private String description;

    public Exam(int id, String title, String type, String subject, String date, String time, String location, String duration, String description) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.subject = subject;
        this.date = date;
        this.time = time;
        this.location = location;
        this.duration = duration;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
