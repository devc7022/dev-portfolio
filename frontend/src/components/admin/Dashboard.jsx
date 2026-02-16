import React, { useState, useEffect } from "react";
import AdminService from "../../services/admin.service";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("projects"); // projects, skills, experience
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (!user) {
            navigate("/admin/login");
        } else {
            fetchData(activeTab);
        }
    }, [activeTab, navigate]);

    const fetchData = async (tab) => {
        // For now, we reuse the public endpoints for fetching to list items
        // In a real app, we might use AdminService if there are drafts/hidden items
        // accessing the public ones via the existing hooks or services would be cleaner
        // but for simplicity, let's fetch directly or use a shared service.
        // ACTUALLY, let's use the public API URL from AuthService/AdminService helpers logic
        // But AdminService CRUD is what we have.
        // Let's assume we can fetch data.
        // Since I haven't implemented a "get all" in AdminService (only Create/Update/Delete),
        // I'll rely on the existing public API for *listing* and AdminService for *modifying*.

        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/";
        try {
            const response = await fetch(`${API_URL}${tab}`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    const handleLogout = () => {
        AuthService.logout();
        navigate("/");
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            let promise;
            if (activeTab === 'projects') promise = AdminService.deleteProject(id);
            else if (activeTab === 'skills') promise = AdminService.deleteSkill(id);
            else if (activeTab === 'experience') promise = AdminService.deleteExperience(id);

            if (promise) {
                promise.then(() => {
                    setData(data.filter(item => item.id !== id));
                });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 font-sans">
            {/* Sidebar / Header */}
            <nav className="bg-white dark:bg-slate-800 shadow p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">Admin Dashboard</h1>
                <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-700">
                    <LogOut size={18} /> Logout
                </button>
            </nav>

            <div className="container mx-auto p-6">
                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
                    {['projects', 'skills', 'experience'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 capitalize ${activeTab === tab ? 'border-b-2 border-blue-500 font-bold text-blue-500' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Action Bar */}
                <div className="flex justify-end mb-4">
                    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow">
                        <Plus size={18} /> Add New {activeTab.slice(0, -1)}
                    </button>
                </div>

                {/* List */}
                <div className="grid gap-4">
                    {data.map((item) => (
                        <div key={item.id || item.name} className="bg-white dark:bg-slate-800 p-4 rounded shadow flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">{item.title || item.role || item.category}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-md">
                                    {item.description || item.company || (item.items && item.items.join(", "))}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-slate-700 rounded">
                                    <Edit size={18} />
                                </button>
                                <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-slate-700 rounded">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
