export default function Footer() {
    return (
        <footer className="bg-dark border-t border-white/10 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-xl font-bold text-primary mb-2">Zohaib Sarwar</p>
                    <p className="text-gray-400 text-sm">Full Stack Developer & SEO Strategist</p>
                </div>

                <div className="flex space-x-6">
                    <a href="http://www.linkedin.com/in/zohaib-sarwar-2631b3211" target="_blank" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
                    <a href="https://github.com/MZohaibSarwar" target="_blank" className="text-gray-400 hover:text-primary transition-colors">GitHub</a>
                    <a href="https://www.upwork.com/freelancers/~01ba79c1150830620d?mp_source=share" target="_blank" className="text-gray-400 hover:text-primary transition-colors">Upwork</a>
                    <a href="https://www.fiverr.com/zohaib1sarwar" target="_blank" className="text-gray-400 hover:text-primary transition-colors">Fiverr</a>
                </div>

                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Zohaib Sarwar. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
