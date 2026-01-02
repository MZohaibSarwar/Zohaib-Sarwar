"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Terminal,
    Database,
    Search,
    Layers,
    Wrench
} from "lucide-react";

interface SkillCategory {
    title: string;
    icon: any;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Development",
        icon: Code2,
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"],
    },
    {
        title: "Backend Development",
        icon: Terminal,
        skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"],
    },
    {
        title: "CMS Platforms",
        icon: Layers,
        skills: ["WordPress", "Shopify", "Squarespace", "Wix", "Custom CMS Themes"],
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
        title: "SEO Excellence",
        icon: Search,
        skills: ["Technical SEO", "On-Page SEO", "Schema Markup", "Core Web Vitals", "Speed Optimization", "SEO Audits"],
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        skills: ["Git", "GitHub", "AWS", "Vercel", "Docker", "RESTful APIs", "Postman"],
    },
];

export default function Skills() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-primary">Expertise</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A comprehensive overview of the technologies and strategies I use to deliver exceptional digital results.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                    >
                        <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                            <category.icon className="text-primary" size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm border border-white/5"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
