import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CallToAction from "@/components/CallToAction";

export default function AboutPage() {
    return (
        <div className="pt-20">
            <About />
            <Experience />
            <Education />
            <CallToAction />
        </div>
    );
}
