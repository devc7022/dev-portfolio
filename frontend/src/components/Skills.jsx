import { motion } from "framer-motion";
import LoadingSkeleton from "./LoadingSkeleton";
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiFastapi, SiTailwindcss, SiMongodb, SiMysql, SiIntellijidea, SiPostman, SiJsonwebtokens, SiSocketdotio, SiEclipseide } from "react-icons/si";
import { TbApi, TbLogicAnd } from "react-icons/tb";
import { VscSymbolStructure } from "react-icons/vsc";

export default function Skills({ data, loading }) {
    if (loading) {
        return (
            <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map(i => <LoadingSkeleton key={i} type="card" />)}
                </div>
            </section>
        );
    }

    // Fallback if data is not an array (e.g. initial render before fetch even handling loading)
    const skillCategories = Array.isArray(data) ? data : [];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const getIcon = (skillName) => {
        const name = skillName.toLowerCase();
        if (name.includes("java") && !name.includes("script")) return <FaJava className="text-orange-500" />;
        if (name.includes("python")) return <FaPython className="text-blue-500" />;
        if (name.includes("javascript")) return <FaJs className="text-yellow-400" />;
        if (name.includes("html")) return <FaHtml5 className="text-orange-600" />;
        if (name.includes("css")) return <FaCss3Alt className="text-blue-600" />;
        if (name.includes("spring")) return <SiSpringboot className="text-green-500" />;
        if (name.includes("hibernate")) return <SiHibernate className="text-gray-500" />;
        if (name.includes("fastapi")) return <SiFastapi className="text-teal-500" />;
        if (name.includes("react")) return <FaReact className="text-blue-400" />;
        if (name.includes("tailwind")) return <SiTailwindcss className="text-cyan-400" />;
        if (name.includes("mongo")) return <SiMongodb className="text-green-600" />;
        if (name.includes("mysql")) return <SiMysql className="text-blue-500" />;
        if (name.includes("intellij")) return <SiIntellijidea className="text-purple-500" />;
        if (name.includes("eclipse")) return <SiEclipseide className="text-blue-800" />;
        if (name.includes("git")) return <FaGitAlt className="text-red-500" />;
        if (name.includes("postman")) return <SiPostman className="text-orange-500" />;
        if (name.includes("jwt")) return <SiJsonwebtokens className="text-pink-500 text-lg" />;
        if (name.includes("websocket")) return <SiSocketdotio className="text-gray-800 dark:text-white" />;
        if (name.includes("rest")) return <TbApi className="text-green-600" />;
        if (name.includes("oop")) return <VscSymbolStructure className="text-blue-500" />;
        if (name.includes("dsa")) return <TbLogicAnd className="text-purple-600" />;
        return <FaDatabase className="text-gray-400" />; // Default icon
    };

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400"> Technologies I work with to build high-quality software.</p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-slate-800"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-blue-400 mb-6 pb-2 border-b border-gray-100 dark:border-slate-800">
                                {category.category || category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items && category.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-slate-800/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-gray-200 dark:hover:border-slate-700 hover:shadow-md transition-all cursor-default"
                                    >
                                        <span className="text-lg">{getIcon(skill)}</span>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
