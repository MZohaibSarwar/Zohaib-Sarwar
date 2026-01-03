export default function Footer() {
    return (
        <footer className="bg-dark border-t border-white/10 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-xl font-bold text-primary mb-2">Waqas Asghar</p>
                    <p className="text-gray-400 text-sm">Full Stack Developer | CPA & Certified PMP</p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/thewaqas/" target="_blank" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
                    <a href="https://github.com/thewaqaspro" target="_blank" className="text-gray-400 hover:text-primary transition-colors">GitHub</a>
                    <a href="https://stackoverflow.com/users/7899307/waqas" target="_blank" className="text-gray-400 hover:text-primary transition-colors">Stackoverflow</a>
                    <a href="https://upwork.com/freelancers/thewaqas?mp_source=share" target="_blank" className="text-gray-400 hover:text-primary transition-colors">Upwork</a>
                </div>

                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Waqas Asghar. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
