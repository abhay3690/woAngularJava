package com.example.demo.model;

import lombok.Data;

@Data
public class JwtAuthRequest {
    private String username;
    private String password;
}
