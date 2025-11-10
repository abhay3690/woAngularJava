package com.example.demo.service;
import java.io.Writer;
import java.util.List;

import com.example.demo.model.User;
public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    User createUser(User user);
    User updateUser(Long id, User user);
    void deleteUser(Long id);
    List<User> searchUsers(String name);
    void exportUserToCSV(Writer writer, String name);

//    User registerNewUser(User user);

}