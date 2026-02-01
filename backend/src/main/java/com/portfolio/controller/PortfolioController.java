package com.portfolio.controller;

import com.portfolio.model.*;
import com.portfolio.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping("/profile")
    public Profile getProfile() {
        return portfolioService.getProfile();
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return portfolioService.getSkills();
    }

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        return portfolioService.getExperience();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return portfolioService.getProjects();
    }
}
