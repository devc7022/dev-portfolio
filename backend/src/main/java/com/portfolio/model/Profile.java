package com.portfolio.model;

public record Profile(
                String name,
                String title,
                String tagline,
                String about,
                String email,
                String location,
                String linkedin,
                String github,
                String leetcode) {
}
