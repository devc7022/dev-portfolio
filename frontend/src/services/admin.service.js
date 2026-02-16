import axios from "axios";
import authHeader from "./auth-header";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/admin/";

const addProject = (project) => {
    return axios.post(API_URL + "projects", project, { headers: authHeader() });
};

const updateProject = (id, project) => {
    return axios.put(API_URL + `projects/${id}`, project, { headers: authHeader() });
};

const deleteProject = (id) => {
    return axios.delete(API_URL + `projects/${id}`, { headers: authHeader() });
};

// --- Skills ---
const addSkill = (skill) => {
    return axios.post(API_URL + "skills", skill, { headers: authHeader() });
};

const updateSkill = (id, skill) => {
    return axios.put(API_URL + `skills/${id}`, skill, { headers: authHeader() });
};

const deleteSkill = (id) => {
    return axios.delete(API_URL + `skills/${id}`, { headers: authHeader() });
};

const updateProfile = (profile) => {
    return axios.put(API_URL + "profile", profile, { headers: authHeader() });
};

const AdminService = {
    addProject,
    updateProject,
    deleteProject,
    addSkill,
    updateSkill,
    deleteSkill,
    updateProfile
};

export default AdminService;
