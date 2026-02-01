package com.portfolio.model;

import java.util.List;

public record Skill(
        String category,
        List<String> items) {
}
