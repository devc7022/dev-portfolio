import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import LoadingSkeleton from "./LoadingSkeleton";

export default function Experience({ data, loading }) {
    if (loading) {
        return (
            <section id="experience" className="py-20 bg-white dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-4">
                    <LoadingSkeleton type="timeline" />
                    <LoadingSkeleton type="timeline" />
                </div>
            </section>
        )
    }

    const jobs = Array.isArray(data) ? data : [];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-slate-700"></div>

                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col md:flex-row gap-8 mb-12 group"
                        >
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:order-last md:text-left'}`}>
                                <div className={`${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                                    <div className={`flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {job.period}
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-[-8px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 z-10 group-hover:scale-125 transition-transform duration-300"></div>

                            <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'} pt-1`}>
                                <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow text-left">
                                    {job.description && (
                                        <p className="text-gray-700 dark:text-gray-300 mb-3 font-medium">{job.description}</p>
                                    )}
                                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                                        {job.achievements && job.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
