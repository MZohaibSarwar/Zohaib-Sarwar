"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                        The developer who thinks like
                        <span className="text-primary"> an SEO Strategist.</span>
                    </h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I'm Zohaib Sarwar, a Full Stack Developer with over 4 years of experience building modern web applications.
                            But I'm not just a coder. I specialized in bridging the gap between high-quality development and data-driven SEO strategy.
                        </p>
                        <p>
                            Many developers build beautiful websites that unfortunately never get found. My mission is to ensure that never happens.
                            I build websites that are not only visually stunning and technically robust but are also architected to rank
                            on the first page of search results from day one.
                        </p>
                        <p>
                            Whether it's optimizing Core Web Vitals, implementing schema markup, or architecting a scalable backend,
                            I focus on the technical details that matter for both users and search engines.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-3xl font-bold text-primary mb-1">4+</p>
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Years Experience</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-3xl font-bold text-primary mb-1">50+</p>
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Projects Completed</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="aspect-square rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-700 bg-white/5 border border-primary/20 flex items-center justify-center">
                        <img
                            src="https://zohaib.power-devs.com/wp-content/uploads/2024/11/Zohaib-Sarwar-3-1.png"
                            alt="Zohaib Sarwar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Accent decoration */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10 blur-2xl" />
                </motion.div>
            </div>
        </section>
    );
}
