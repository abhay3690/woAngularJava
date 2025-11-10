//package com.example.demo.service.impl;
//import com.example.demo.model.User;
//import com.example.demo.repository.UserRepository;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.ArgumentCaptor;
//
//import java.io.StringWriter;
//import java.util.Arrays;
//import java.util.List;
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.Mockito.*;
//public class UserServiceImplTest {
//    private UserRepository userRepository;
//    private UserServiceImpl userService;
//
//    @BeforeEach
//    void setUp() {
//        userRepository = mock(UserRepository.class);
//        userService = new UserServiceImpl(userRepository);
//    }
//
//    @Test
//    void testGetAllUsers() {
//        User u1 = new User(1L, "Abhay", "a@test.com", "111", "XYZ");
//        User u2 = new User(2L, "Raj", "r@test.com", "222", "XYZ");
//        when(userRepository.findAll()).thenReturn(Arrays.asList(u1, u2));
//
//        List<User> result = userService.getAllUsers();
//
//        assertEquals(2, result.size());
//        verify(userRepository).findAll();
//    }
//
//    @Test
//    void testGetUserById_UserExists() {
//        User user = new User(1L, "Abhay", "a@test.com", "111", "XYZ");
//        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
//
//        User result = userService.getUserById(1L);
//
//        assertEquals("Abhay", result.getName());
//        verify(userRepository).findById(1L);
//    }
//
//    @Test
//    void testGetUserById_UserNotFound() {
//        when(userRepository.findById(1L)).thenReturn(Optional.empty());
//        RuntimeException ex = assertThrows(RuntimeException.class, () -> userService.getUserById(1L));
//        assertTrue(ex.getMessage().contains("User not found"));
//    }
//
//    @Test
//    void testCreateUser_Success() {
//        User newUser = new User(null, "Abhay", "a@test.com", "111", "XYZ");
//
//        when(userRepository.existsByEmail("a@test.com")).thenReturn(false);
//        when(userRepository.existsByContactNumber("111")).thenReturn(false);
//        when(userRepository.save(any(User.class))).thenAnswer(invocation -> {
//            User u = invocation.getArgument(0);
//            u.setId(1L);
//            return u;
//        });
//
//        User created = userService.createUser(newUser);
//
//        assertNotNull(created.getId());
//        assertEquals("Abhay", created.getName());
//        verify(userRepository).save(newUser);
//    }
//
//    @Test
//    void testCreateUser_EmailExists() {
//        User newUser = new User(null, "Abhay", "a@test.com", "111", "XYZ");
//        when(userRepository.existsByEmail("a@test.com")).thenReturn(true);
//
//        RuntimeException ex = assertThrows(RuntimeException.class, () -> userService.createUser(newUser));
//        assertEquals("Email already exists!", ex.getMessage());
//    }
//
//    @Test
//    void testCreateUser_ContactExists() {
//        User newUser = new User(null, "Abhay", "a@test.com", "111", "XYZ");
//        when(userRepository.existsByEmail("a@test.com")).thenReturn(false);
//        when(userRepository.existsByContactNumber("111")).thenReturn(true);
//
//        RuntimeException ex = assertThrows(RuntimeException.class, () -> userService.createUser(newUser));
//        assertEquals("Contact number already exists!", ex.getMessage());
//    }
//
//    @Test
//    void testUpdateUser_Success() {
//        User existing = new User(1L, "Abhay", "a@test.com", "111", "XYZ");
//        User updated = new User(1L, "Raj", "r@test.com", "222", "XYZ");
//
//        when(userRepository.findById(1L)).thenReturn(Optional.of(existing));
//        when(userRepository.existsByEmail("r@test.com")).thenReturn(false);
//        when(userRepository.existsByContactNumber("222")).thenReturn(false);
//        when(userRepository.save(any(User.class))).thenReturn(updated);
//
//        User result = userService.updateUser(1L, updated);
//
//        assertEquals("Raj", result.getName());
//        verify(userRepository).save(existing);
//    }
//
//    @Test
//    void testUpdateUser_EmailAlreadyExists() {
//        User existing = new User(1L, "Abhay", "a@test.com", "111", "XYZ");
//        User updated = new User(1L, "Raj", "r@test.com", "111", "XYZ");
//
//        when(userRepository.findById(1L)).thenReturn(Optional.of(existing));
//        when(userRepository.existsByEmail("r@test.com")).thenReturn(true);
//
//        RuntimeException ex = assertThrows(RuntimeException.class, () -> userService.updateUser(1L, updated));
//        assertEquals("Email already exists!", ex.getMessage());
//    }
//
//    @Test
//    void testDeleteUser() {
//        doNothing().when(userRepository).deleteById(1L);
//        userService.deleteUser(1L);
//        verify(userRepository).deleteById(1L);
//    }
//
//    @Test
//    void testSearchUsers() {
//        when(userRepository.findByNameContainingIgnoreCase("Abhay"))
//                .thenReturn(List.of(new User(1L, "Abhay", "a@test.com", "111", "XYZ")));
//
//        List<User> users = userService.searchUsers("Abhay");
//
//        assertEquals(1, users.size());
//        verify(userRepository).findByNameContainingIgnoreCase("Abhay");
//    }
//
//    @Test
//    void testExportUserToCSV_Success() {
//        List<User> users = List.of(
//                new User(1L, "Abhay", "a@test.com", "111", "XYZ"),
//                new User(2L, "Raj", "r@test.com", "222", "XYZ")
//        );
//        when(userRepository.findAll()).thenReturn(users);
//
//        StringWriter writer = new StringWriter();
//        userService.exportUserToCSV(writer, null);
//
//        String output = writer.toString();
//        assertTrue(output.contains("ID,Name,Email,Contact Number"));
//        assertTrue(output.contains("Abhay"));
//        assertTrue(output.contains("Raj"));
//    }
//
//    @Test
//    void testExportUserToCSV_NoUsersFound() {
//        when(userRepository.findByNameContainingIgnoreCase("xyz")).thenReturn(List.of());
//
//        StringWriter writer = new StringWriter();
//        RuntimeException ex = assertThrows(RuntimeException.class, () -> userService.exportUserToCSV(writer, "xyz"));
//
//        assertTrue(ex.getMessage().contains("No users found with name"));
//    }
//}
