package nl.simac.examrooster.services;


import nl.simac.examrooster.models.User;
import nl.simac.examrooster.repositories.FakeUserData;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final FakeUserData fakeUserData;

    public UserService(FakeUserData fakeUserData) {
        this.fakeUserData = fakeUserData;
    }

    public List<User> getAllUsers(){
        return fakeUserData.getAllUsers();
    }

    public User getUserBy(int id){
        return fakeUserData.getUserBy(id);
    }

    public boolean addUser(User user){
        return fakeUserData.addUser(user);
    }

}
