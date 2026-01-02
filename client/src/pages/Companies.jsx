import Navbar from '../components/Navbar';
import { Building2, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Companies() {
    const navigate = useNavigate();
    const companies = [
        { name: "Google", questions: 1250, color: "bg-red-50 text-red-600 dark:bg-red-900/20" },
        { name: "Meta", questions: 980, color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20" },
        { name: "Amazon", questions: 1560, color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20" },
        { name: "Microsoft", questions: 1100, color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20" },
        { name: "Apple", questions: 850, color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
        { name: "Zoho", questions: 720, color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20" },
        { name: "LinkedIn", questions: 640, color: "bg-blue-50 text-blue-700 dark:bg-blue-900/30" },
        { name: "Netflix", questions: 420, color: "bg-red-50 text-red-700 dark:bg-red-900/10" },
        { name: "Uber", questions: 670, color: "bg-black text-white dark:bg-gray-700" },
        { name: "Adobe", questions: 550, color: "bg-red-50 text-red-500 dark:bg-red-900/20" },
        { name: "Airbnb", questions: 340, color: "bg-pink-50 text-pink-600 dark:bg-pink-900/20" },
        { name: "Oracle", questions: 480, color: "bg-red-50 text-red-800 dark:bg-red-900/40" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Company-wise Questions</h1>
                    <p className="text-gray-600 dark:text-gray-400">Practice questions asked by your dream companies in recent interviews.</p>
                </div>

                <div className="relative mb-10 max-w-2xl">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search for companies..."
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm focus:ring-2 focus:ring-brand-500 outline-none text-lg transition-all dark:text-white"
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {companies.map((company) => (
                        <div
                            key={company.name}
                            onClick={() => navigate('/problems')}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all cursor-pointer group flex flex-col items-center text-center hover:-translate-y-1 duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-2xl font-bold shadow-sm ${company.color}`}>
                                {company.name[0]}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-brand-600 transition-colors">{company.name}</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{company.questions} Questions</span>
                        </div>
                    ))}

                    <div className="bg-gray-100 dark:bg-gray-800/50 p-8 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center text-center text-gray-500 h-full min-h-[180px]">
                        <Building2 size={32} className="mb-2 opacity-50" />
                        <span className="font-medium">View All Companies</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
