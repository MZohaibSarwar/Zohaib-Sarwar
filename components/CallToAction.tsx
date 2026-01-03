"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="py-20 px-4 sm:px-6 ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-blue-600/10 border border-white/10 text-center max-w-7xl mx-auto px-6 py-12 md:py-20"
            >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Ready to scale your <br />
                        <span className="text-primary">digital presence?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Whether you need a high-performance web app or a technical SEO overhaul, I'm here to help you rank higher and convert more.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-dark font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
                        >
                            Start Your Project
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                        <Link
                            href="/about"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/10 transition-all"
                        >
                            Learn More
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
