import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Mic, Video, UserCheck, Clock, Calendar } from 'lucide-react';

export default function MockInterview() {
    const [matching, setMatching] = useState(false);
    const [aiLoading, setAiLoading] = useState(false);

    const handleStartMatch = () => {
        setMatching(true);
        // Simulate matching process
        setTimeout(() => {
            setMatching(false);
            alert("No peers found in your time zone. Please try again later :(");
        }, 2000);
    };

    const handleStartAI = () => {
        setAiLoading(true);
        // Simulate AI init
        setTimeout(() => {
            setAiLoading(false);
            alert("AI Interviewer v1.0 is loading context... (Demo mode)");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Mock Interviews</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Practice makes perfect. Simulate real peer-to-peer interviews or try our AI-powered interviewer.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Peer Mock */}
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-xl transition-all">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 dark:bg-brand-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 relative">
                            <UserCheck size={32} />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative">Peer-to-Peer Mock</h2>
                        <ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-400 relative">
                            <li className="flex items-center gap-2"><Clock size={18} /> 45-60 minute sessions</li>
                            <li className="flex items-center gap-2"><Video size={18} /> Video & Code sync</li>
                            <li className="flex items-center gap-2"><UserCheck size={18} /> Matched by skill level</li>
                        </ul>

                        <button
                            onClick={handleStartMatch}
                            disabled={matching || aiLoading}
                            className="w-full py-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 relative flex justify-center items-center gap-2"
                        >
                            {matching ? (
                                <>
                                    <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span>
                                    Searching for peer...
                                </>
                            ) : 'Start Matching'}
                        </button>
                    </div>

                    {/* AI Mock */}
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-xl transition-all">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 relative">
                            <Mic size={32} />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative">AI Interviewer</h2>
                        <ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-400 relative">
                            <li className="flex items-center gap-2"><Clock size={18} /> Instant feedback</li>
                            <li className="flex items-center gap-2"><Mic size={18} /> Voice interaction</li>
                            <li className="flex items-center gap-2"><Calendar size={18} /> Available 24/7</li>
                        </ul>

                        <button
                            onClick={handleStartAI}
                            disabled={matching || aiLoading}
                            className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg relative flex justify-center items-center gap-2"
                        >
                            {aiLoading ? (
                                <>
                                    <span className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full opacity-50"></span>
                                    Initializing AI...
                                </>
                            ) : 'Try Demo'}
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
