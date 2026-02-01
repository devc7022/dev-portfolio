import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download, MousePointer2 } from "lucide-react";
import { Link } from "react-scroll";
import LoadingSkeleton from "./LoadingSkeleton";
import LeetCodeIcon from "./LeetCodeIcon";

export default function Hero({ data, loading }) {
    if (loading) {
        return (
            <section id="home" className="min-h-screen flex items-center justify-center pt-16">
                <div className="max-w-7xl mx-auto px-4 w-full flex flex-col items-center gap-6">
                    <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-slate-800 animate-pulse"></div>
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                </div>
            </section>
        );
    }

    const { name, title, tagline, socials } = data; // Assuming socials might be added effectively later, but currently inline

    const letterContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const letterAnimation = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">


            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-50 dark:bg-slate-950 -z-20"></div>
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 p-1">
                        <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                            <span className="text-4xl md:text-5xl">👨‍💻</span>
                            {/* Replace with <img src="/profile.jpg" alt="Dev Chauhan" className="w-full h-full object-cover" /> */}
                        </div>
                    </div>
                </motion.div>

                <motion.h2
                    variants={letterContainer}
                    initial="hidden"
                    animate="show"
                    className="text-lg md:text-xl font-semibold text-blue-600 dark:text-teal-400 mb-4 tracking-wide uppercase flex flex-wrap justify-center gap-1"
                >
                    {title.split("").map((char, index) => (
                        <motion.span key={index} variants={letterAnimation}>
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400"
                >
                    {name}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed"
                >
                    {tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="/Dev_Resume.pdf"
                        download
                        className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
                    >
                        <Download className="w-5 h-5" /> Download Resume
                    </a>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-teal-400 dark:hover:text-teal-400 font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer"
                    >
                        View Projects <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 flex items-center gap-6"
                >
                    <a href="https://linkedin.com/in/dev-chauhan" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/devc7022" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://leetcode.com/u/Devc7022/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-[#FFA116] transition-colors">
                        <LeetCodeIcon className="w-6 h-6" />
                    </a>
                    <a href="mailto:devc7022@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <MousePointer2 className="w-5 h-5" />
                </motion.div>
            </div>
        </section>
    );
}
