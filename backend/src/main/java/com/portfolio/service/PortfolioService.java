package com.portfolio.service;

import com.portfolio.model.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class PortfolioService {

    public Profile getProfile() {
        return new Profile(
                "Dev Chauhan",
                "Full-Stack Developer (Java + React)",
                "Building scalable backend systems and modern frontend experiences",
                "MCA graduate (2023–2025) from USICT, GGSIPU with 78.8%. Strong foundation in Java, Spring Boot, React, MongoDB, MySQL. Passionate about backend systems, APIs, real-time applications, and AI-powered solutions.",
                "devc7022@gmail.com",
                "New Delhi, India",
                "https://linkedin.com/in/dev-chauhan", // Placeholder
                "https://github.com/devc7022", // Placeholder
                "https://leetcode.com/u/Devc7022/");
    }

    public List<Skill> getSkills() {
        List<Skill> skills = new ArrayList<>();
        skills.add(new Skill("Languages", Arrays.asList("Java", "Python", "JavaScript", "HTML", "CSS")));
        skills.add(new Skill("Frameworks", Arrays.asList("Spring Boot", "Hibernate", "FastAPI")));
        skills.add(new Skill("Frontend", Arrays.asList("React.js", "Tailwind CSS")));
        skills.add(new Skill("Databases", Arrays.asList("MongoDB", "MySQL")));
        skills.add(new Skill("Tools", Arrays.asList("IntelliJ IDEA", "Eclipse", "Git", "Postman")));
        skills.add(new Skill("Concepts", Arrays.asList("OOP", "DSA", "REST APIs", "WebSocket", "JWT")));
        return skills;
    }

    public List<Experience> getExperience() {
        List<Experience> jobs = new ArrayList<>();
        jobs.add(new Experience(
                "1",
                "Full-Stack Developer",
                "Mobiloitte Pvt. Ltd.",
                "Dec 2025 – Present",
                "Working on AI Chatbots and Management Systems.",
                Arrays.asList(
                        "Built AI chatbot using LangChain and LangGraph",
                        "Automated customer queries, bookings, and service recommendations",
                        "Developed scalable REST APIs using FastAPI, Node.js, and authentication",
                        "Integrated ML models for intent detection and contextual responses")));
        return jobs;
    }

    public List<Project> getProjects() {
        List<Project> projects = new ArrayList<>();
        projects.add(new Project(
                "1",
                "Massage Parlour Management System with AI Chatbot",
                "AI-driven management system with automated booking and queries.",
                Arrays.asList("FastAPI", "Node.js", "LangChain", "React"),
                "#", "#"));
        projects.add(new Project(
                "2",
                "Real-Time Chat Application",
                "Real-time messaging with WebSocket and MongoDB persistence.",
                Arrays.asList("Java Spring Boot", "WebSocket", "MongoDB", "React", "Tailwind"),
                "https://github.com/devc7022/chat-app", "#"));
        projects.add(new Project(
                "3",
                "Car Rental System",
                "Vehicle inventory management and booking workflow.",
                Arrays.asList("Java", "MySQL", "JDBC"),
                "#", "#"));
        return projects;
    }
}
