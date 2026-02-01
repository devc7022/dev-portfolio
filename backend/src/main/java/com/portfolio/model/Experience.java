package com.portfolio.model;

import java.util.List;

public record Experience(
        String id,
        String role,
        String company,
        String period,
        String description,
        List<String> achievements) {
}
