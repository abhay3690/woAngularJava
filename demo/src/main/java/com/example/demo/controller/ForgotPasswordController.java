package com.example.demo.controller;


import com.example.demo.model.ApiResponse;
import com.example.demo.model.ForgotPasswordRequest;
import com.example.demo.model.ResetPasswordRequest;
import com.example.demo.service.ForgotPasswordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/public")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequiredArgsConstructor
public class ForgotPasswordController {

    private final ForgotPasswordService forgotPasswordService;

    // 🔹 Step 1: Send OTP to user's email
    @PostMapping("/forgot-password")
    public ResponseEntity<?> sendOtp(@RequestBody ForgotPasswordRequest request) {
        String response = forgotPasswordService.generateAndSendOtp(request.getEmail());
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse(response, true));
    }

    // 🔹 Step 2: Verify OTP and reset password
    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request) {
        String response = forgotPasswordService.verifyOtpAndResetPassword(
                request.getEmail(),
                request.getOtp(),
                request.getNewPassword()
        );
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse(response, true));
    }
}
