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
                        The developer who spans
                        <span className="text-primary"> Financial & Tech Systems.</span>
                    </h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I'm Waqas Asghar, a Full Stack Web Developer and CPA/Certified PMP with over 10 years of experience.
                            I possess strong capabilities in financial project management, technical accounting, process improvement, and business system integration through cross-functional collaboration.
                        </p>
                        <p>
                            I demonstrate comprehensive expertise in accounting, auditing, taxation, and business operations—adept at
                            translating business needs into technical processes and features leveraging global infrastructure.
                        </p>
                        <p>
                            My strength lies in systems knowledge; leveraging technology to scale projects and increase efficiency.
                            I excel at defining technical requirements and working with development resources to drill down to root causes and robust solutions.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-3xl font-bold text-primary mb-1">10+</p>
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
                            src="/images/waqas.png"
                            alt="Waqas Asghar"
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
