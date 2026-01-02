"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
    {
        degree: "Bachelor of Science in Information Technology",
        institution: "University Of The Punjab | Lahore",
        period: "2017-2021",
        details: "Focus on software engineering, database management, and web technologies."
    },
    {
        degree: "Intermediate | FSC Pre Eng.",
        institution: "Bise Lahore",
        period: "2014-2016",
        details: "Advanced mathematics and physics foundation for engineering studies."
    },
    {
        degree: "Matric | Science Group",
        institution: "Bise Lahore",
        period: "2012-2014",
        details: "Core science education with emphasis on analytical thinking."
    }
];

export default function Education() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <GraduationCap className="text-primary" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Academic <span className="text-primary">Background</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/20 transition-all flex flex-col"
                    >
                        <span className="text-primary text-sm font-bold mb-4">{edu.period}</span>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                        <p className="text-gray-400 font-semibold text-sm mb-4">{edu.institution}</p>
                        <p className="text-gray-500 text-sm leading-relaxed mt-auto">{edu.details}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
