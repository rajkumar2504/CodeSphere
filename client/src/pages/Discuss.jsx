import Navbar from '../components/Navbar';
import { useState } from 'react';
import { MessageSquare, ThumbsUp, Eye, MessageCircle, Search, Filter, Hash, BookOpen, Clock, User } from 'lucide-react';

export default function Discuss() {
    const [activeTab, setActiveTab] = useState('discussions');

    const discussions = [
        {
            id: 1,
            title: "Google Interview Experience (Accepted) - L4 SWE",
            author: "dev_sara",
            category: "Interview Experience",
            votes: 452,
            views: "12.5k",
            replies: 89,
            tags: ["Google", "L4", "Offer"],
            time: "2 hours ago"
        },
        {
            id: 2,
            title: "Optimal solution for 'Trapping Rain Water' using 2 pointers",
            author: "algo_master",
            category: "DSA Strategy",
            votes: 128,
            views: "3.2k",
            replies: 24,
            tags: ["Arrays", "Two Pointers", "Hard"],
            time: "5 hours ago"
        },
        {
            id: 3,
            title: "System Design: How to design a URL Shortener like TinyURL?",
            author: "sys_design_pro",
            category: "System Design",
            votes: 892,
            views: "45k",
            replies: 156,
            tags: ["Design", "Scalability", "Database"],
            time: "1 day ago"
        },
        {
            id: 4,
            title: "Why is DP so hard? Tips for beginners?",
            author: "coding_newbie",
            category: "General",
            votes: 56,
            views: "1.8k",
            replies: 34,
            tags: ["Dynamic Programming", "Help"],
            time: "1 day ago"
        },
        {
            id: 5,
            title: "Amazon OA Questions 2024 - Leaked?",
            author: "anon_user_123",
            category: "Interview Questions",
            votes: 340,
            views: "22k",
            replies: 210,
            tags: ["Amazon", "OA", "2024"],
            time: "2 days ago"
        },
        {
            id: 6,
            title: "Meta Production Engineer Interview - Failed",
            author: "linux_nerd",
            category: "Interview Experience",
            votes: 88,
            views: "5k",
            replies: 42,
            tags: ["Meta", "Production", "Rejected"],
            time: "3 days ago"
        }
    ];

    const articles = [
        {
            id: 1,
            title: "Mastering Dynamic Programming: From Zero to Hero",
            author: "dp_wizard",
            readTime: "15 min read",
            likes: 1205,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300&h=200",
            tags: ["Algorithms", "Dynamic Programming"]
        },
        {
            id: 2,
            title: "The Ultimate Guide to System Design Interviews",
            author: "arch_expert",
            readTime: "25 min read",
            likes: 3400,
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=300&h=200",
            tags: ["System Design", "Scalability"]
        },
        {
            id: 3,
            title: "Understanding Graph Algorithms (BFS & DFS)",
            author: "graph_guru",
            readTime: "10 min read",
            likes: 890,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=300&h=200",
            tags: ["Graphs", "Algorithms"]
        },
        {
            id: 4,
            title: "React Hooks Deep Dive: useEffect & useMemo",
            author: "react_pro",
            readTime: "12 min read",
            likes: 1560,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300&h=200",
            tags: ["React", "Frontend"]
        }
    ];

    const categories = ["All Topics", "Interview Questions", "Interview Experience", "System Design", "General", "Compensation"];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
                        <button className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2">
                            <MessageSquare size={20} />
                            New Discussion
                        </button>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-3 px-2">Categories</h3>
                            <nav className="space-y-1">
                                {categories.map((cat, i) => (
                                    <a key={i} href="#" className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0 ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-750'}`}>
                                        {cat}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-3 px-2">Trending Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Amazon", "Google", "DP", "Greedy", "Graph", "React"].map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full cursor-pointer hover:bg-brand-100 dark:hover:bg-brand-900/40 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
                            <div className="relative flex-1 w-full sm:w-auto">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search discussions & articles..."
                                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:text-white outline-none transition-all"
                                />
                            </div>

                            {/* Tabs */}
                            <div className="flex bg-white dark:bg-gray-800 p-1 rounded-xl border border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={() => setActiveTab('discussions')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'discussions' ? 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                                >
                                    Discussions
                                </button>
                                <button
                                    onClick={() => setActiveTab('articles')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'articles' ? 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                                >
                                    Articles
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {activeTab === 'discussions' ? (
                                discussions.map(item => (
                                    <div key={item.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-600 transition-all group cursor-pointer shadow-sm hover:shadow-md">
                                        <div className="flex gap-4">
                                            <div className="hidden sm:flex flex-col items-center gap-1 min-w-[60px] text-gray-500 dark:text-gray-400">
                                                <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg w-full">
                                                    <ThumbsUp size={18} />
                                                    <span className="font-bold text-gray-700 dark:text-gray-300">{item.votes}</span>
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <img src={`https://ui-avatars.com/api/?name=${item.author}&background=random`} alt={item.author} className="w-5 h-5 rounded-full" />
                                                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{item.author}</span>
                                                    <span className="text-xs text-gray-400">•</span>
                                                    <span className="text-xs text-gray-400">{item.time}</span>
                                                </div>

                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-1">
                                                    {item.title}
                                                </h3>

                                                <div className="flex flex-wrap items-center gap-3 mt-4">
                                                    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                                        {item.category}
                                                    </span>
                                                    {item.tags.map(tag => (
                                                        <div key={tag} className="flex items-center text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded">
                                                            <Hash size={12} className="mr-0.5 opacity-50" />
                                                            {tag}
                                                        </div>
                                                    ))}
                                                    <div className="flex items-center ml-auto gap-4 text-xs text-gray-500 dark:text-gray-400">
                                                        <span className="flex items-center gap-1"><Eye size={14} /> {item.views}</span>
                                                        <span className="flex items-center gap-1"><MessageCircle size={14} /> {item.replies} replies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {articles.map(article => (
                                        <div key={article.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all group cursor-pointer flex flex-col h-full">
                                            <div className="h-40 overflow-hidden">
                                                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="p-5 flex-1 flex flex-col">
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {article.tags.map(tag => (
                                                        <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
                                                    {article.title}
                                                </h3>
                                                <div className="mt-auto pt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700">
                                                    <div className="flex items-center gap-2">
                                                        <User size={14} />
                                                        <span>{article.author}</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
                                                        <span className="flex items-center gap-1"><ThumbsUp size={14} /> {article.likes}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
