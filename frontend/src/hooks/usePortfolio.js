import { useState, useEffect } from "react";
import axios from "axios";

// Fallback data in case backend is unreachable
const INITIAL_DATA = {
    profile: {
        name: "Dev Chauhan",
        title: "Full-Stack Developer",
        tagline: "Building scalable backend systems and modern frontend experiences",
        about: "Loading about info...",
        socials: {}
    },
    skills: [
        { category: "Languages", items: ["Java", "Python", "JavaScript", "HTML", "CSS"] },
        { category: "Frameworks", items: ["Spring Boot", "Hibernate", "FastAPI"] },
        { category: "Frontend", items: ["React.js", "Tailwind CSS"] },
        { category: "Databases", items: ["MongoDB", "MySQL"] },
        { category: "Tools", items: ["IntelliJ IDEA", "Eclipse", "Git", "Postman"] },
        { category: "Concepts", items: ["OOP", "DSA", "REST APIs", "WebSocket", "JWT"] }
    ],
    experience: [
        {
            id: "1",
            role: "Full-Stack Developer",
            company: "Mobiloitte Pvt. Ltd.",
            period: "Dec 2025 – Present",
            description: "Working on AI Chatbots and Management Systems.",
            achievements: [
                "Built AI chatbot using LangChain and LangGraph",
                "Automated customer queries, bookings, and service recommendations",
                "Developed scalable REST APIs using FastAPI, Node.js, and authentication",
                "Integrated ML models for intent detection and contextual responses"
            ]
        }
    ],
    projects: [
        {
            id: "1",
            title: "Massage Parlour Management System with AI Chatbot",
            description: "AI-driven management system with automated booking and queries.",
            techStack: ["FastAPI", "Node.js", "LangChain", "React"],
            githubLink: "#",
            liveLink: "#"
        },
        {
            id: "2",
            title: "Real-Time Chat Application",
            description: "Real-time messaging with WebSocket and MongoDB persistence.",
            techStack: ["Java Spring Boot", "WebSocket", "MongoDB", "React", "Tailwind"],
            githubLink: "https://github.com/devc7022/chat-app",
            liveLink: "#"
        },
        {
            id: "3",
            title: "Car Rental System",
            description: "Vehicle inventory management and booking workflow.",
            techStack: ["Java", "MySQL", "JDBC"],
            githubLink: "#",
            liveLink: "#"
        }
    ]
};

export const usePortfolio = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

                const [profileRes, skillsRes, expRes, projectsRes] = await Promise.all([
                    axios.get(`${API_URL}/profile`),
                    axios.get(`${API_URL}/skills`),
                    axios.get(`${API_URL}/experience`),
                    axios.get(`${API_URL}/projects`)
                ]);

                setData({
                    profile: profileRes.data,
                    skills: skillsRes.data,
                    experience: expRes.data,
                    projects: projectsRes.data
                });
                setError(null);
            } catch (err) {
                console.error("Failed to fetch portfolio data", err);
                setError("Failed to load data from backend. Showing cached version.");
                // Keep initial data or try to load from local storage/cache if available
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
