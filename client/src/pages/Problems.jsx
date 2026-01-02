import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Search, Filter, CheckCircle2 } from 'lucide-react';
import { getProblems } from '../services/api';

const Problems = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const data = await getProblems();
                setProblems(data);
            } catch (error) {
                console.error("Failed to load problems", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProblems();
    }, []);

    const difficultyColor = (diff) => {
        if (!diff) return 'text-gray-600 dark:text-gray-400';
        switch (diff.toLowerCase()) {
            case 'easy': return 'text-green-600 bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400';
            case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-100 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-400';
            case 'hard': return 'text-red-600 bg-red-50 border-red-100 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400';
            default: return 'text-gray-600 dark:text-gray-400';
        }
    };

    if (loading) return <div className="text-center mt-20 dark:text-white">Loading problems...</div>;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Problem Set</h1>
                    <p className="text-gray-600 dark:text-gray-400">Sharpen your skills with our curated list of problems.</p>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="md:col-span-2 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 dark:focus:border-brand-500 transition-all placeholder-gray-400"
                            value={searchTerm}
                            onInput={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <button className="w-full flex items-center justify-between px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-medium text-gray-700 dark:text-gray-200">
                            <span>Difficulty</span>
                            <Filter size={16} />
                        </button>
                    </div>
                    <div className="relative">
                        <button className="w-full flex items-center justify-between px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-medium text-gray-700 dark:text-gray-200">
                            <span>Topic</span>
                            <Filter size={16} />
                        </button>
                    </div>
                </div>

                {/* Problem List */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        <div className="col-span-1">Status</div>
                        <div className="col-span-6">Title</div>
                        <div className="col-span-2">Difficulty</div>
                        <div className="col-span-2">Acceptance</div>
                        <div className="col-span-1">Action</div>
                    </div>

                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                        {problems
                            .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map((problem) => (
                                <div key={problem.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                                    <div className="col-span-1">
                                        <CheckCircle2 size={20} className="text-gray-300 dark:text-gray-600" />
                                    </div>
                                    <div className="col-span-6">
                                        <div
                                            className="text-gray-900 dark:text-white font-medium hover:text-brand-600 dark:hover:text-brand-400 hover:underline cursor-pointer trnasition-colors text-base"
                                            onClick={() => navigate(`/problem/${problem.slug}`)}
                                        >
                                            {problem.id}. {problem.title}
                                        </div>
                                        <div className="flex gap-2 mt-1">
                                            {problem.category && (
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{problem.category}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${difficultyColor(problem.difficulty)}`}>
                                            {problem.difficulty}
                                        </span>
                                    </div>
                                    <div className="col-span-2 text-gray-600 dark:text-gray-400 text-sm">
                                        {problem.acceptance || 'N/A'}
                                    </div>
                                    <div className="col-span-1">
                                        <button onClick={() => navigate(`/problem/${problem.slug}`)} className="text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/30 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all font-medium text-sm">Solve</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Problems;
