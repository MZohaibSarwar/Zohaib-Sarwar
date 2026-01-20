"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus("success");
            setFormData({ name: "", email: "", project: "", message: "" });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus("idle");
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build <br /> <span className="text-primary">something great.</span></h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Have a project in mind or want to discuss how we can improve your search rankings?
                        Reach out through the form or any of the platforms below.
                    </p>

                    <div className="space-y-8">
                        <a href="https://wa.me/+923314831548" target="blank" className="flex items-center gap-6 group">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                                <Phone className="text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500 uppercase">Whatsapp Me</p>
                                <p className="text-xl font-bold">+923314831548</p>
                            </div>
                        </a>
                        <a href="mailto:zohaib.s169@gmail.com" className="flex items-center gap-6 group">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                                <Mail className="text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500 uppercase">Email Me</p>
                                <p className="text-xl font-bold">zohaib.s169@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex gap-4">
                            <a href="http://www.linkedin.com/in/zohaib-sarwar-2631b3211" target="blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"><Linkedin /></a>
                            <a href="https://github.com/MZohaibSarwar" target="blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"><Github /></a>
                            <a href="https://www.fiverr.com/zohaib1sarwar" target="blank" className="react-icons p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"><SiFiverr /></a>
                            <a href="https://www.upwork.com/freelancers/~01ba79c1150830620d?mp_source=share" target="blank" className="react-icons p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"><SiUpwork /></a>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                    {status === "success" ? (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Send className="text-primary" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                            <p className="text-gray-400">Thanks for reaching out, Zohaib will get back to you shortly.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-8 text-primary font-bold hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-500 mb-2">Your Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Enter your name"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-500 mb-2">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="name@company.com"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-500 mb-2">Project Interest</label>
                                <select
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors appearance-none"
                                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                                >
                                    <option className="bg-gray-900 text-gray-300">Web Development</option>
                                    <option className="bg-gray-900 text-gray-300">SEO Strategy</option>
                                    <option className="bg-gray-900 text-gray-300">Page Speed Optimization</option>
                                    <option className="bg-gray-900 text-gray-300">Something else</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-500 mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Tell me about your project..."
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                disabled={status === "loading"}
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-dark font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-50"
                            >
                                {status === "loading" ? "Sending..." : "Send Message"}
                                <Send size={20} />
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
