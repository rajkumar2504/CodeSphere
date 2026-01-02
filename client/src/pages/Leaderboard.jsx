import Navbar from '../components/Navbar';
import { Medal, Crown, TrendingUp } from 'lucide-react';

export default function Leaderboard() {
    const users = [
        { rank: 1, name: "algorithm_god", score: 3250, country: "US", solved: 452 },
        { rank: 2, name: "code_ninja_99", score: 3120, country: "IN", solved: 410 },
        { rank: 3, name: "dev_master", score: 3050, country: "CN", solved: 398 },
        { rank: 4, name: "python_wizard", score: 2980, country: "DE", solved: 375 },
        { rank: 5, name: "java_guru", score: 2910, country: "BR", solved: 360 },
        { rank: 6, name: "cpp_expert", score: 2850, country: "KR", solved: 345 },
        { rank: 7, name: "frontend_fan", score: 2790, country: "US", solved: 330 },
        { rank: 8, name: "backend_boss", score: 2750, country: "UK", solved: 325 },
        { rank: 9, name: "fullstack_dev", score: 2700, country: "CA", solved: 315 },
        { rank: 10, name: "bug_hunter", score: 2650, country: "AU", solved: 300 },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Global Leaderboard</h1>
                    <p className="text-gray-600 dark:text-gray-400">See where you stand against the world's best developers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center">
                        <Crown size={40} className="text-yellow-500 mb-3" />
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">algorithm_god</h3>
                        <span className="text-sm text-gray-500 mb-2">Rank #1</span>
                        <span className="text-2xl font-bold text-brand-600">3250 XP</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center transform scale-105 border-brand-200">
                        <Medal size={40} className="text-gray-400 mb-3" />
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">code_ninja_99</h3>
                        <span className="text-sm text-gray-500 mb-2">Rank #2</span>
                        <span className="text-2xl font-bold text-brand-600">3120 XP</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center">
                        <Medal size={40} className="text-orange-600 mb-3" />
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">dev_master</h3>
                        <span className="text-sm text-gray-500 mb-2">Rank #3</span>
                        <span className="text-2xl font-bold text-brand-600">3050 XP</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-gray-700/50">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Rank</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400">User</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Country</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Problems Solved</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Rating</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {users.map((user) => (
                                <tr key={user.rank} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">#{user.rank}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                        <img src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} alt={user.name} className="w-6 h-6 rounded-full" />
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{user.country}</td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{user.solved}</td>
                                    <td className="px-6 py-4 font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1">
                                        {user.score}
                                        <TrendingUp size={14} className="text-green-500" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
