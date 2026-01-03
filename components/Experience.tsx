"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Web Developer",
        company: "121",
        period: "Feb 2025 - Present",
        description: "Full-time web development role focusing on modern web solutions."
    },
    {
        role: "Full Stack Web Developer",
        company: "Power Funnels",
        period: "Jun 2021 - Jun 2025",
        description: "Developed conversion-optimized funnels and robust web solutions using modern tech stacks. (Vancouver, British Columbia, Canada)"
    },
    {
        role: "Full Stack Developer",
        company: "Upwork (Freelance)",
        period: "Aug 2021 - Sep 2024",
        description: "Delivered web applications and custom solutions for diverse global clients. (Remote)"
    },
    {
        role: "Wordpress Developer",
        company: "Soft Enterprise",
        period: "Feb 2021 - May 2021",
        description: "Built and managed Wordpress sites, ensuring high performance and security. (Lahore, Punjab, Pakistan)"
    },
    {
        role: "College Lecturer",
        company: "Superior College",
        period: "Oct 2020 - Jan 2021",
        description: "Taught programming and project management concepts. (Sheikhupura District, Punjab, Pakistan)"
    }
];

export default function Experience() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <Briefcase className="text-primary" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Work <span className="text-primary">Experience</span></h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                    >
                        {/* Icon/Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-dark group-hover:border-primary/50 transition-colors absolute left-0 md:left-1/2 md:-ml-5">
                            <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                        </div>

                        {/* Card Content */}
                        <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/20 transition-all ml-16 md:ml-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-sm font-semibold text-gray-400 mb-3">{exp.company}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
