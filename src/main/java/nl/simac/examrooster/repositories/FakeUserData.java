package nl.simac.examrooster.repositories;

import nl.simac.examrooster.models.Role;
import nl.simac.examrooster.models.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Repository
public class FakeUserData{

    private final List<User> users = new ArrayList<>();

    public FakeUserData() {
        User a = new User(1, "Rick", "Novak", "Rick.Novak", "rnovak@gmail.com", "ricky123", Role.STUDENT);
        User b = new User(2, "Susan", "Connor", "Susan.Connor", "sconnor@gmail.com", "connxp1", Role.STAFF);
        User c = new User(3, "Jeff", "Johnson", "Jeff.Johnson", "jayj@gmail.com", "jaythebest", Role.INVIGILATOR);
        User d = new User(4, "Ronald", "Barr", "Ronald.Barr", "ronnybar@gmail.com", "barr127", Role.ADMIN);

        Collections.addAll(users, a, b, c, d);
    }

    public List<User> getAllUsers() {
        return users;
    }

    public User getUserBy(int id){
        for (User user : users) {
            if (user.getId() == id) {
                return user;
            }
        }
        return null;
    }

    public boolean addUser(User user){
        if(this.getUserBy(user.getId()) != null){
            return false;
        }
        users.add(user);
        return true;
    }
}
