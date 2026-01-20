"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Search as SearchIcon, ArrowRight } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    seoFocus: string;
    github?: string;
    demo?: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "KyndStudio",
        description: "A high-performance digital marketing agency website built with Next.js and Headless CMS, optimized for sub-second load times.",
        tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        seoFocus: "Core Web Vitals & Dynamic Schema",
        github: "https://github.com/MZohaibSarwar",
        demo: "https://kyndstudio.com/",
        image: "/images/kyndstudio-project.webp",
    },
    {
        title: "Vitality Tulsa",
        description: "A Physical Therapy clinic website featuring online appointment booking and patient resources.",
        tags: ["Wordpress", "Elementor", "WpForms", "Custom PHP"],
        seoFocus: "Website Development & SEO Optimization",
        github: "https://github.com/MZohaibSarwar",
        demo: "https://vitalitytulsa.com/",
        image: "/images/vitality-tulsa-project.webp",
    },
    {
        title: "Absolute Petroleum",
        description: "A petroleum services company website with integrated SEO strategies to boost online visibility.",
        tags: ["Wordpress", "Elementor", "WpForms", "Custom PHP"],
        seoFocus: "Website Development & SEO Optimization",
        github: "https://github.com/MZohaibSarwar",
        demo: "https://absolutepetroleum.com/",
        image: "/images/absolute-petroleum-project.webp",
    },
    {
        title: "Good Guitarist",
        description: "A music tutoring platform offering personalized guitar lessons and resources.",
        tags: ["Wordpress", "Elementor", "WpForms", "Custom PHP"],
        seoFocus: "Website Development & SEO Optimization",
        github: "https://github.com/MZohaibSarwar",
        demo: "https://goodguitarist.com/",
        image: "/images/goodguitarist portfolio.webp",
    },
    {
        title: "Ladies School Of Driving",
        description: "A driver education website with course scheduling and online resources for students.",
        tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        seoFocus: "Core Web Vitals & Dynamic Schema",
        github: "https://github.com/MZohaibSarwar",
        demo: "https://dev.ladiesdriving.co.uk/",
        image: "/images/Ladies School of driving portfolio.webp",
    },
    {
        title: "Goodwin Pelvic PT",
        description: "A Physical Therapy clinic website featuring online appointment booking and patient resources.",
        tags: ["Wordpress", "Elementor", "WpForms", "Custom PHP"],
        seoFocus: "Website Development & SEO Optimization",
        github: "https://github.com/MZohaibSarwar",
        demo: "https://goodwinpelvicpt.com/",
        image: "/images/goodwin pelvic pt portfolio.webp",
    },
    {
        title: "TRT Colombia",
        description: "A health and wellness website with integrated SEO strategies to boost online visibility.",
        tags: ["Wordpress", "Elementor", "WpForms", "Custom PHP"],
        seoFocus: "Core Web Vitals & Dynamic Schema",
        github: "https://github.com/MZohaibSarwar",
        demo: "https://trtcolombia.com/",
        image: "/images/trtcolombia portfolio.webp",
    },
    {
        title: "The Movement Schopp",
        description: "A physical therapy practice website with patient resources and appointment scheduling.",
        tags: ["Wordpress", "Elementor", "WpForms", "Custom PHP"],
        seoFocus: "Website Development & SEO Optimization",
        github: "https://github.com/MZohaibSarwar",
        demo: "https://themovementschopp.com/",
        image: "/images/the movement schopp portfolio.webp",
    },
    {
        title: "Wisconsin Foot & Ankle Clinic",
        description: "Foot and ankle clinic website with patient resources and online appointment scheduling.",
        tags: ["Wordpress", "Elementor", "WpForms", "Custom PHP"],
        seoFocus: "Website Development & SEO Optimization",
        github: "https://github.com/MZohaibSarwar",
        demo: "https://wisconsinfootandankleclinic.com/",
        image: "/images/wisconsin foot and ankle clinic portfolio.webp",
    },
];

export default function Projects({ isHomePage = false }: { isHomePage?: boolean }) {
    const displayedProjects = isHomePage ? projects.slice(0, 3) : projects;

    return (
        <section className={`${isHomePage ? "py-20" : "pt-32 pb-20"} px-4 sm:px-6 max-w-7xl mx-auto`}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Work</span></h2>
                    <p className="text-gray-400 max-w-2xl">
                        A selection of projects where I've combined robust engineering with strategic SEO to drive real business results.
                    </p>
                </div>
                {isHomePage && (
                    <Link
                        href="/projects"
                        className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                        View All Projects <ArrowRight size={20} />
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/20 transition-colors"
                    >
                        <div className="aspect-[16/10] overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                <div className="flex gap-3">
                                    {project.github && <a href={project.github} target="blank" className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"><Github size={18} /></a>}
                                    {project.demo && <a href={project.demo} target="blank" className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"><ExternalLink size={18} /></a>}
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mb-6 line-clamp-2">{project.description}</p>

                            <div className="flex items-center gap-2 mb-6 p-2.5 rounded-xl bg-primary/5 border border-primary/10">
                                <SearchIcon size={14} className="text-primary" />
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{project.seoFocus}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 text-[10px] font-medium text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
