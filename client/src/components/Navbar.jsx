import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Code2, Sun, Moon } from "lucide-react";

export default function Navbar() {
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                        <Code2 size={24} />
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">CodeSphere</span>
                </div>
                <nav className="hidden md:flex gap-8">
                    <a onClick={() => navigate('/problems')} className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors cursor-pointer">Problems</a>
                    <a onClick={() => navigate('/contests')} className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors cursor-pointer">Contests</a>
                    <a onClick={() => navigate('/discuss')} className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors cursor-pointer">Discuss</a>
                    <a onClick={() => navigate('/leaderboard')} className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors cursor-pointer">Leaderboard</a>
                    <a onClick={() => navigate('/roadmap')} className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors cursor-pointer">Roadmap</a>
                </nav>
                <div className="flex gap-3 items-center">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-all mr-2"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {currentUser ? (
                        <div className="flex items-center gap-4">
                            <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-200">Hello, {currentUser.displayName?.split(' ')[0]}</span>
                            <img
                                src={currentUser.photoURL}
                                alt="Profile"
                                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 cursor-pointer"
                                onClick={() => navigate('/profile')}
                            />
                            <button onClick={logout} className="text-sm font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">Logout</button>
                        </div>
                    ) : (
                        <>
                            <button onClick={() => navigate('/login')} className="px-5 py-2.5 text-brand-700 dark:text-brand-400 font-semibold hover:bg-brand-50 dark:hover:bg-brand-900/20 rounded-lg transition-all">Log In</button>
                            <button onClick={() => navigate('/login')} className="px-5 py-2.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/40">Sign Up</button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
