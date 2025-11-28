import { Wand2, Github } from 'lucide-react';

/**
 * Navigation Bar Component.
 * Displays the application logo, title, and social links.
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-indigo-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                {/* Logo Area */}
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 shadow-lg shadow-blue-500/30">
                        <Wand2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-800">
                            AI Resume Tailor
                        </h1>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                            By Uroj Ali
                        </p>
                    </div>
                </div>

                {/* Social Link */}
                <a
                    href="https://github.com/Aliurooz786"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;