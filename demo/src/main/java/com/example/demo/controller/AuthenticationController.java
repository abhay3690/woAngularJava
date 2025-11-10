//package com.example.demo.controller;
//
//import com.example.demo.model.User;
//import com.example.demo.service.AuthenticationService;
//import com.example.demo.service.UserService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/v1/auth")
//@RequiredArgsConstructor
//public class AuthenticationController {
//
//    private final AuthenticationService service;
//
//    private final UserService userService ;
//
//    @PostMapping("/login")
//    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
//        return ResponseEntity.status(HttpStatus.OK).body(service.authenticate(request));
//    }
//    // register new user
//    @PostMapping("/register")
//    public ResponseEntity<User> registerUser(@RequestBody User user){
//        User registerUser = this.userService.registerNewUser(user);
//        return new ResponseEntity<>(registerUser,HttpStatus.CREATED);
//    }
//
//}