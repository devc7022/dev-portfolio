import { motion } from "framer-motion";
import { User, Code, Database, Brain } from "lucide-react";
import LoadingSkeleton from "./LoadingSkeleton";
import AnimatedCounter from "./AnimatedCounter";

export default function About({ data, loading }) {
    const features = [
        { icon: <Code className="w-6 h-6 text-blue-500" />, title: "Backend Development", desc: "Building robust Java/Spring Boot APIs" },
        { icon: <Database className="w-6 h-6 text-green-500" />, title: "Database Design", desc: "Optimizing MongoDB & MySQL schemas" },
        { icon: <Brain className="w-6 h-6 text-purple-500" />, title: "AI Integration", desc: "Implementing LLMs with LangChain" },
        { icon: <User className="w-6 h-6 text-orange-500" />, title: "Problem Solving", desc: "Strong DSA & OOP foundations" },
    ];

    if (loading) {
        return (
            <section id="about" className="py-20 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <LoadingSkeleton />
                </div>
            </section>
        )
    }

    const { about } = data || {};

    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                            MCA Graduate & Full-Stack Enthusiast
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed whitespace-pre-line">
                            {about}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <a href="https://leetcode.com/u/Devc7022/" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors cursor-pointer group">
                                <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform origin-left">
                                    <AnimatedCounter value="250" suffix="+" />
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">DSA Problems Solved</span>
                            </a>
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                                <span className="block text-3xl font-bold text-teal-600 dark:text-teal-400">
                                    <AnimatedCounter value="5" suffix="+" />
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Major Projects</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {features.map((item, index) => (
                            <div key={index} className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-700">
                                <div className="mb-4">{item.icon}</div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
