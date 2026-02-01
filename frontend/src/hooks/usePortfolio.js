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
    skills: [],
    experience: [],
    projects: []
};

export const usePortfolio = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [profileRes, skillsRes, expRes, projectsRes] = await Promise.all([
                    axios.get("http://localhost:8080/api/profile"),
                    axios.get("http://localhost:8080/api/skills"),
                    axios.get("http://localhost:8080/api/experience"),
                    axios.get("http://localhost:8080/api/projects")
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
