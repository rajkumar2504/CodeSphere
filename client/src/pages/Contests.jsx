import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Calendar, Clock, Trophy, Users, ChevronRight } from 'lucide-react';

export default function Contests() {
    const [activeTab, setActiveTab] = useState('upcoming');

    const contests = [
        {
            id: 1,
            title: "Weekly Contest 386",
            startTime: "Starts in 2 days",
            duration: "1 hour 30 mins",
            participants: 12450,
            status: "upcoming",
            type: "Weekly"
        },
        {
            id: 2,
            title: "Biweekly Contest 124",
            startTime: "Starts in 5 days",
            duration: "1 hour 30 mins",
            participants: 8320,
            status: "upcoming",
            type: "Biweekly"
        },
        {
            id: 3,
            title: "CodeSphere Cup 2026",
            startTime: "Live Now",
            duration: "3 hours",
            participants: 25000,
            status: "live",
            type: "Special"
        },
        {
            id: 4,
            title: "Weekly Contest 385",
            startTime: "Ended 2 days ago",
            duration: "1 hour 30 mins",
            participants: 15600,
            status: "past",
            type: "Weekly"
        }
    ];

    const filteredContests = contests.filter(c => {
        if (activeTab === 'live') return c.status === 'live';
        if (activeTab === 'upcoming') return c.status === 'upcoming';
        return c.status === 'past';
    });

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contests</h1>
                    <p className="text-gray-600 dark:text-gray-400">Join our global coding competitions to challenge yourself and win prizes.</p>
                </div>

                {/* Tabs */}
                <div className="flex space-x-1 bg-white dark:bg-gray-800 p-1 rounded-xl max-w-md mb-8 border border-gray-200 dark:border-gray-700">
                    {['live', 'upcoming', 'past'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all capitalize ${activeTab === tab
                                    ? 'bg-brand-600 text-white shadow-sm'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Contest List */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredContests.map((contest) => (
                        <div key={contest.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${contest.type === 'Biweekly' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                                        contest.type === 'Weekly' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                            'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                                    }`}>
                                    {contest.type}
                                </span>
                                {contest.status === 'live' && (
                                    <span className="flex items-center gap-1.5 text-red-600 font-bold text-sm animate-pulse">
                                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                        LIVE
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                {contest.title}
                            </h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                    <Calendar size={16} className="mr-2" />
                                    {contest.startTime}
                                </div>
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                    <Clock size={16} className="mr-2" />
                                    {contest.duration}
                                </div>
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                    <Users size={16} className="mr-2" />
                                    {contest.participants.toLocaleString()} participants
                                </div>
                            </div>

                            <button className="w-full py-3 px-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-brand-600 dark:hover:bg-brand-600 text-gray-900 dark:text-white hover:text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 group-hover:bg-brand-600 group-hover:text-white">
                                {contest.status === 'live' ? 'Enter Contest' : contest.status === 'upcoming' ? 'Register Now' : 'Virtual Participate'}
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>

                {filteredContests.length === 0 && (
                    <div className="text-center py-20">
                        <Trophy size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">No contests found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Check back later for new competitions.</p>
                    </div>
                )}
            </main>
        </div>
    );
}
