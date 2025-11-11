package com.example.demo.service.impl;

import com.example.demo.constants.AppConstatns;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.Writer;
import java.util.List;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Service

public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;


    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;

        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    @Override
    public User createUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists!");
        }
        if (userRepository.existsByContactNumber(user.getContactNumber())) {
            throw new RuntimeException("Contact number already exists!");
        }
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, User updatedUser) {
        User existingUser = getUserById(id);

        // Check if email/contact belong to another user
        if (!existingUser.getEmail().equalsIgnoreCase(updatedUser.getEmail())
                && userRepository.existsByEmail(updatedUser.getEmail())) {
            throw new RuntimeException("Email already exists!");
        }
        if (!existingUser.getContactNumber().equals(updatedUser.getContactNumber())
                && userRepository.existsByContactNumber(updatedUser.getContactNumber())) {
            throw new RuntimeException("Contact number already exists!");
        }

        existingUser.setName(updatedUser.getName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setContactNumber(updatedUser.getContactNumber());
        // 🔐 Only update password if a new one is provided
        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isBlank()) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            existingUser.setPassword(encoder.encode(updatedUser.getPassword()));
        }
        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<User> searchUsers(@RequestParam String name) {
        return userRepository.findByNameContainingIgnoreCase(name);
    }

    @Override
    public void exportUserToCSV(Writer writer, String name) {
        List<User> users;

        if (name != null && !name.trim().isEmpty()) {
            users = userRepository.findByNameContainingIgnoreCase(name);
        } else {
            users = userRepository.findAll();
        }

        if (users.isEmpty()) {
            throw new RuntimeException("No users found" +
                    (name != null && !name.isBlank() ? " with name: " + name : "") + "!");
        }

        try {
            writer.write("ID,Name,Email,Contact Number\n");
            for (User user : users) {
                writer.write(String.format("%d,%s,%s,%s\n",
                        user.getId(),
                        user.getName(),
                        user.getEmail(),
                        user.getContactNumber()));
            }
            writer.flush();
        } catch (Exception e) {
            throw new RuntimeException("Error while writing CSV: " + e.getMessage());
        }
    }

    @Override
    public User registerNewUser(User user) {
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));

        Role role = this.roleRepository.findById(AppConstatns.NORMAL_USER)
                .orElseThrow(() -> new RuntimeException("Default ROLE_USER not found in database"));

        user.getRoles().add(role);
        return this.userRepository.save(user);
    }

}