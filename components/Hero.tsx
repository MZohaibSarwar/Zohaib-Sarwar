"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, BarChart } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 px-4 sm:px-6 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
                        Full Stack Developer | CPA & Certified PMP
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
                >
                    Bridging <span className="text-primary">Finance</span> <br />
                    & Technology.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Combining technical coding expertise with 10+ years of financial project management, technical accounting, and system integration experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/projects"
                        className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-dark font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
                    >
                        View My Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-white font-semibold px-8 py-4 rounded-xl border border-white/10 transition-all"
                    >
                        Let's Collaborate
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
                >
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Code className="text-primary mb-4" size={32} />
                        <h3 className="text-lg font-bold mb-2">Modern Tech Stack</h3>
                        <p className="text-gray-400 text-sm">Next.js, TypeScript, Node.js, and more for high-performance builds.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <BarChart className="text-primary mb-4" size={32} />
                        <h3 className="text-lg font-bold mb-2">SEO-First Design</h3>
                        <p className="text-gray-400 text-sm">Every line of code is written with search engine visibility in mind.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-green-500" />
                            </div>
                            <span className="text-primary font-bold">100</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Google Core Web Vitals</h3>
                        <p className="text-gray-400 text-sm">Optimized for speed and user experience to ensure top rankings.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
