package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.AuthenticationService;
import com.example.demo.service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true") // Angular support
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request,
            HttpServletResponse response) {

        AuthenticationResponse authResponse = service.authenticate(request);

        // 🔐 Create JWT Cookie
        Cookie cookie = new Cookie("jwtToken", authResponse.getToken());
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(24 * 60 * 60);
        cookie.setDomain("localhost");
        response.addCookie(cookie);

        return ResponseEntity.status(HttpStatus.OK).body(authResponse);
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User userDto) {
        User registerUser = this.userService.registerNewUser(userDto);
        return new ResponseEntity<>(registerUser, HttpStatus.CREATED);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("jwtToken", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(0); // delete cookie
        response.addCookie(cookie);

        return ResponseEntity.ok("Logged out successfully!");
    }
}
