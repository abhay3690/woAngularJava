package com.example.demo.service;


import com.example.demo.controller.AuthenticationRequest;
import com.example.demo.controller.AuthenticationResponse;
import com.example.demo.exception.ApiException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final JwtService jwtService;

    @Autowired
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
            User user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new ApiException("User not found with email: " + request.getEmail()));

            String jwtToken = jwtService.generateToken((UserDetails) user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();

        } catch (BadCredentialsException e) {
            throw new ApiException("Invalid username or password");
        } catch (Exception e) {
            throw new ApiException("Authentication failed: " + e.getMessage());
        }
    }
}
