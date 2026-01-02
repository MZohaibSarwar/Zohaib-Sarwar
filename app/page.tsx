import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CallToAction from "@/components/CallToAction";

export default function Home() {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects isHomePage />
            <CallToAction />
        </div>
    );
}
