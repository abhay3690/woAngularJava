package com.example.demo.service;

import com.example.demo.repository.UserRepository;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class ForgotPasswordService {

    private final UserRepository userRepository;
    private final JavaMailSender mailSender;
    private final PasswordEncoder passwordEncoder;

    /**
     * Step 1: Send OTP to email
     */
    public String generateAndSendOtp(String email) {
        var userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            throw new RuntimeException("No user found with this email: " + email);
        }

        var user = userOpt.get();
        String otp = String.format("%06d", new Random().nextInt(999999));

        user.setOtp(otp);
        user.setOtpGeneratedTime(LocalDateTime.now());
        userRepository.save(user);

        try {
            sendOtpEmail(email, otp);
        } catch (Exception e) {
            throw new RuntimeException("Failed to send OTP: " + e.getMessage());

        }

        return "OTP sent successfully to " + email;
    }

    public String verifyOtpAndResetPassword(String email, String otp, String newPassword) {
        var userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            throw new RuntimeException("No user found with this email!");
        }

        var user = userOpt.get();

        if (!otp.equals(user.getOtp())) {
            throw new RuntimeException("Invalid OTP!");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setOtp(null);
        user.setOtpGeneratedTime(null);
        userRepository.save(user);

        return "Password updated successfully!";
    }

    /**
     * Utility: Send HTML email with OTP
     */
    private void sendOtpEmail(String to, String otp) throws MessagingException {
        String subject = "Password Reset OTP";
        String body = "<div style='font-family:Arial,sans-serif;padding:20px;'>"
                + "<h2>Your OTP for password reset:</h2>"
                + "<h3 style='color:blue;'>" + otp + "</h3>"
                + "<p>Do not share this OTP with anyone.</p>"
                + "</div>";

        var message = mailSender.createMimeMessage();
        var helper = new MimeMessageHelper(message, true);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(body, true);
        mailSender.send(message);
    }
}
