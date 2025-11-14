package com.example.demo.service;

import com.example.demo.repository.UserRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class ForgotPasswordService {

    private final UserRepository userRepository;
    private final JavaMailSender mailSender;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.recieved.hostname}")
    private String MAIL_FROM_HOST_NAME;
    @Value("${spring.mail.fromName}")
    private String MAIL_FROM_NAME;
    @Value("${spring.send.otp.template.name}")
    private String SEND_OTP_TEMPLATE_NAME;

    private final TemplateEngine templateEngine;

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
            sendOtpEmail(email, otp, user.getName());

        } catch (Exception e) {
            throw new RuntimeException("Failed to send OTP: " + e.getMessage());

        }

        return "OTP sent successfully to " + email;
    }

    public String verifyOtpAndResetPassword(String email, String otp, String newPassword) {

        System.out.println(newPassword);
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
    private void sendOtpEmail(String to, String otp, String name) throws MessagingException, UnsupportedEncodingException {
        String subject = "Password Reset OTP";

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,
                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());

        mimeMessageHelper.setTo(to);
        mimeMessageHelper.setSubject(subject);
        mimeMessageHelper.setFrom(MAIL_FROM_HOST_NAME, MAIL_FROM_NAME);

        // Thymeleaf template processing
        Context context = initializeThymeleafContext(otp, name);

        String emailTemplate = templateEngine.process(SEND_OTP_TEMPLATE_NAME, context);
        mimeMessageHelper.setText(emailTemplate, true);

        javaMailSender.send(mimeMessage);

    }


    private Context initializeThymeleafContext(String otp, String name) {
        Context context = new Context();
        context.setVariable("otp",otp);
        context.setVariable("userName", name);
        context.setVariable("verificationLink", "http://localhost:4200/resetpassword");
        return context;
    }


}
