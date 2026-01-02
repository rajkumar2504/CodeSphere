import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { getUserProfile } from '../services/api';
import { Trophy, Target, Zap, Clock, Code } from 'lucide-react';

export default function Profile() {
    const { currentUser } = useAuth();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (!currentUser) return; // Should be handled by protected route, but safety check
                const data = await getUserProfile();
                setProfile(data);
            } catch (error) {
                console.error("Failed to load profile", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [currentUser]);

    if (!currentUser) return <div className="text-center mt-20">Please log in to view profile.</div>;
    if (loading) return <div className="text-center mt-20">Loading profile...</div>;

    // Default stats if fetch failed or empty
    const stats = profile?.stats || { total: 0, easy: 0, medium: 0, hard: 0 };
    const user = profile?.user || { full_name: currentUser.displayName, email: currentUser.email, picture: currentUser.photoURL };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profile Header */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8 mb-8">
                    <img
                        src={user.picture || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-brand-100 shadow-xl"
                    />
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.full_name}</h1>
                        <p className="text-gray-500 font-medium mb-4">@{user.username || user.email.split('@')[0]}</p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold border border-brand-100">rank: Beginner</span>
                            <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold border border-purple-100">Joined Dec 2025</span>
                        </div>
                    </div>

                    {/* Main Stat Card */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-2xl w-full md:w-64 shadow-xl">
                        <div className="flex items-center gap-3 mb-2 opacity-80">
                            <Trophy size={20} className="text-yellow-400" />
                            <span className="text-sm font-medium">Problems Solved</span>
                        </div>
                        <div className="text-4xl font-bold mb-1">{stats.total}</div>
                        <div className="text-xs text-gray-400">Top 40% of users</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stats Breakdown */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Target size={20} className="text-brand-500" /> Difficulty Breakdown
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm font-medium mb-2">
                                        <span className="text-green-600">Easy</span>
                                        <span className="text-gray-900">{stats.easy} <span className="text-gray-400">/ 500</span></span>
                                    </div>
                                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${(stats.easy / 10) * 100}%` }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm font-medium mb-2">
                                        <span className="text-yellow-600">Medium</span>
                                        <span className="text-gray-900">{stats.medium} <span className="text-gray-400">/ 800</span></span>
                                    </div>
                                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${(stats.medium / 10) * 100}%` }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm font-medium mb-2">
                                        <span className="text-red-600">Hard</span>
                                        <span className="text-gray-900">{stats.hard} <span className="text-gray-400">/ 400</span></span>
                                    </div>
                                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-red-500 rounded-full" style={{ width: `${(stats.hard / 5) * 100}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Clock size={20} className="text-brand-500" /> Recent Submissions
                            </h3>
                            <div className="space-y-4">
                                {profile?.recentSubmissions?.length > 0 ? (
                                    profile.recentSubmissions.map((sub) => (
                                        <div key={sub.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-2 h-10 rounded-full ${sub.status === 'Accepted' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                                <div>
                                                    <div className="font-semibold text-gray-900">{sub.title}</div>
                                                    <div className="text-xs text-gray-500">{new Date(sub.created_at).toLocaleDateString()} • {sub.language}</div>
                                                </div>
                                            </div>
                                            <span className={`px-3 py-1 rounded text-xs font-bold ${sub.status === 'Accepted' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`}>
                                                {sub.status}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center text-gray-500 py-4">No submissions yet. Go solve some problems!</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Badges & Streaks */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Zap size={20} className="text-orange-500" /> Current Streak
                            </h3>
                            <div className="text-center py-6">
                                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">0</div>
                                <div className="text-gray-500 font-medium mt-2">Days</div>
                            </div>
                            <p className="text-sm text-center text-gray-400">Solve a problem today to start your streak!</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Code size={20} className="text-purple-500" /> Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['Arrays', 'Strings', 'Hash Table'].map(skill => (
                                    <span key={skill} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
