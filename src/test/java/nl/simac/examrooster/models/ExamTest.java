package nl.simac.examrooster.models;

import nl.simac.examrooster.models.Exam;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ExamTest {
    private Location r10 = new Location();
    private Exam Physics = new Exam(1,"Physics","Practical","Magnets","02-10-12",r10,"2 hours","learn about magnets");

    @Test
    public void getID() {
        //act
        var actual = Physics.getId();
        int expected = 1;

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void getTitle() {
        //act
        var actual = Physics.getTitle();
        var expected = "Physics";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void getType() {
        //act
        var actual = Physics.getType();
        var expected = "Practical";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void getDateTime() {
        //act
        var actual = Physics.getDateTime();
        var expected = "02-10-12";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void setId() {
        //act
        Physics.setId(1);
        var actual = Physics.getId();
        var expected = 1;

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void setTitle() {
        //act
        Physics.setTitle("Maths");
        var actual = Physics.getTitle();
        var expected = "Maths";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void setType() {
        //act
        Physics.setType("Magnets");
        var actual = Physics.getType();
        var expected = "Magnets";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void testEquals() {
        //act
        Exam Physics2 = new Exam(1,"Physics","Practical","Magnets","02-10-12",r10,"2 hours","learn about magnets");

        //assert
        assertEquals(Physics,Physics2);
    }

    @Test
    void testHashCode() {
        //act
        Exam Physics2 = new Exam(1,"Physics","Practical","Magnets","02-10-12",r10,"2 hours","learn about magnets");

        //assert
        assertTrue(Physics.hashCode() == Physics2.hashCode());
    }


}
