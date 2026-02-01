package com.portfolio.service;

import com.portfolio.model.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String myEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Async
    public void sendContactEmail(ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(myEmail);
        message.setTo(myEmail); // Send to yourself
        message.setSubject("New Portfolio Contact: " + request.name());
        message.setText("Name: " + request.name() + "\n" +
                "Email: " + request.email() + "\n\n" +
                "Message:\n" + request.message());

        mailSender.send(message);
    }
}
