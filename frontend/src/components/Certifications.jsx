import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800 flex items-start gap-6"
                    >
                        <div className="p-4 bg-orange-100 dark:bg-slate-800 rounded-full text-orange-600 dark:text-orange-400">
                            <Award className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Core & Advanced Java</h3>
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">BBCE (Institute)</p>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Comprehensive training covering Object-Oriented Programming (OOP), Collections Framework, JDBC, Servlets, and JSP.
                                Built hands-on console and web applications to solidify concepts.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Java SE", "Java EE", "JDBC", "Servlets", "JSP"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-orange-50 dark:bg-slate-800 text-orange-600 dark:text-orange-400 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
