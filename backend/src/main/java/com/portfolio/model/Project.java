package com.portfolio.model;

import java.util.List;

public record Project(
        String id,
        String title,
        String description,
        List<String> techStack,
        String githubLink,
        String liveLink) {
}
