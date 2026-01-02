"use client";

import { motion } from "framer-motion";
import { Laptop, Zap, Globe, Layout } from "lucide-react";

const services = [
    {
        title: "Full Stack Web Development",
        description: "Custom end-to-end solutions using the latest tech stacks. I focus on building scalable architectures, clean code, and seamless user experiences from database to UI.",
        icon: Laptop,
    },
    {
        title: "SEO Optimization & Strategy",
        description: "Going beyond keywords. I implement deep technical SEO, semantic HTML, schema graphs, and performance wins that search engines love.",
        icon: Globe,
    },
    {
        title: "Performance & Speed Optimization",
        description: "Slow sites kill conversions. I optimize for Core Web Vitals, ensuring lightning-fast load times and smooth interactions that improve both UX and rankings.",
        icon: Zap,
    },
    {
        title: "CMS Design & Customization",
        description: "Tailored WordPress, Shopify, and Wix solutions that don't compromise on speed or SEO flexibility. I build custom themes and plugins for maximum control.",
        icon: Layout,
    },
];

export default function Services() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Tailored <span className="text-primary">Services</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    High-performance digital products built with a dual focus on engineering excellence and search engine dominance.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, idx) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all group hover:border-primary/30"
                    >
                        <div className="shrink-0 p-4 rounded-2xl bg-primary/10 h-fit group-hover:bg-primary/20 transition-colors">
                            <service.icon className="text-primary" size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
