import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, X } from "lucide-react";
import LoadingSkeleton from "./LoadingSkeleton";

export default function Projects({ data, loading }) {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const gradients = [
        "from-blue-500 to-indigo-500",
        "from-teal-500 to-emerald-500",
        "from-orange-500 to-red-500",
        "from-purple-500 to-pink-500",
        "from-cyan-500 to-blue-500"
    ];

    if (loading) {
        return (
            <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map(i => <LoadingSkeleton key={i} type="card" />)}
                </div>
            </section>
        );
    }

    const projects = Array.isArray(data) ? data : [];

    const categories = ["All", "Java", "React", "Backend"];

    const filteredProjects = projects.filter(project => {
        if (activeTab === "All") return true;
        const techStack = project.techStack || []; // Backend field is techStack, mock was tech
        const techString = techStack.join(" ").toLowerCase();

        if (activeTab === "Java") return techString.includes("java") || techString.includes("spring");
        if (activeTab === "React") return techString.includes("react") || techString.includes("frontend");
        if (activeTab === "Backend") return techString.includes("java") || techString.includes("node") || techString.includes("python") || techString.includes("fastapi");
        return true;
    });

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === category
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                                : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => {
                            const gradient = gradients[index % gradients.length];
                            // Handle backend data structure: "techStack" vs mock "tech"
                            // Backend returns Project(id, title, description, techStack, githubLink, liveLink)
                            // Mock had desc, tech, github, live.
                            // We should adapt.
                            const desc = project.description || project.desc;
                            const tech = project.techStack || project.tech || [];
                            const github = project.githubLink || project.github || "#";
                            const live = project.liveLink || project.live || "#";

                            return (
                                <motion.div
                                    key={project.id || index}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-800 flex flex-col h-full group cursor-pointer"
                                    onClick={() => setSelectedProject({ ...project, gradient, desc, tech, github, live })} // Store processed details
                                >
                                    <div className={`h-48 bg-gradient-to-r ${gradient} flex items-center justify-center relative overflow-hidden`}>
                                        <Code className="w-16 h-16 text-white opacity-50 transform group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white font-medium px-4 py-2 border border-white/80 rounded-full hover:bg-white/20 transition-colors">View Details</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 text-sm line-clamp-3">{desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {tech.slice(0, 3).map((t, i) => (
                                                <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded">
                                                    {t}
                                                </span>
                                            ))}
                                            {tech.length > 3 && <span className="text-xs px-2 py-1 text-gray-400">+{tech.length - 3}</span>}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                onClick={() => setSelectedProject(null)}
                            ></motion.div>
                            <motion.div
                                layoutId={selectedProject.id}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors z-20"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className={`h-48 bg-gradient-to-r ${selectedProject.gradient} flex items-center justify-center`}>
                                    <Code className="w-20 h-20 text-white opacity-50" />
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.tech.map((t, i) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                                        {selectedProject.desc}
                                    </p>

                                    <div className="flex gap-4">
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                                        >
                                            <Github className="w-5 h-5" /> GitHub
                                        </a>
                                        <a
                                            href={selectedProject.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
