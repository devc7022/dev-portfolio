import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setStatus("sending");
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Have a project in mind or want to discuss backend architecture?</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Open to Full-Stack Developer opportunities. Feel free to reach out via email or LinkedIn.
                        </p>

                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 dark:bg-slate-800 p-3 rounded-full text-blue-600 dark:text-blue-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                                <p className="text-gray-600 dark:text-gray-400">devc7022@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-teal-100 dark:bg-slate-800 p-3 rounded-full text-teal-600 dark:text-teal-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                                <p className="text-gray-600 dark:text-gray-400">New Delhi, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                {status === "sending" ? "Sending..." : (
                                    <>Send Message <Send className="w-4 h-4" /></>
                                )}
                            </button>
                            {status === "success" && (
                                <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
