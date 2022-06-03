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
    void getID() {
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
    void getPhoneNumber() {
        //act
        var actual = John.getPhoneNumber();
        var expected = "123456789";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void getLicensePlateNumber() {
        //act
        var actual = John.getFirstName();
        var expected = "John";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void setId() {
        //act
        var actual = John.getLicensePlateNumber();
        var expected = "AA-AA-01";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void setFirstName() {
        //act
        John.setFirstName("Michael");
        var actual = John.getFirstName();
        var expected = "Michael";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void setLastName() {
        //act
        John.setLastName("Osun");
        var actual = John.getLastName();
        var expected = "Osun";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void setPhoneNumber() {
        //act
        John.setPhoneNumber("1234512345");
        var actual = John.getPhoneNumber();
        var expected = "1234512345";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void setLicensePlateNumber() {
        //act
        John.setLicensePlateNumber("BB-BB-01");
        var actual = John.getLicensePlateNumber();
        var expected = "BB-BB-01";

        //assert
        assertEquals(expected,actual);
    }

    @Test
    void testEquals() {
        //act
        Visitor John2 = new Visitor(9,"John","Doe","123456789","AA-AA-01");
        //assert
        assertEquals(John,John2);
    }

    @Test
    void testHashCode() {
        //act
        Visitor John2 = new Visitor(9,"John","Doe","123456789","AA-AA-01");
        //assert
        assertTrue(John.hashCode() == John2.hashCode());
    }


}
