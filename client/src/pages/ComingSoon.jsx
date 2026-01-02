import Navbar from '../components/Navbar';
import { Construction } from 'lucide-react';

export default function ComingSoon({ title, description }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg border border-gray-100">
                    <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600">
                        <Construction size={40} />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        {description || "We are currently building this feature. It involves complex backend infrastructure and real-time systems. Stay tuned!"}
                    </p>
                    <button className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all opacity-75 cursor-not-allowed">
                        Notify me when ready
                    </button>
                    <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest font-semibold">Coming Q1 2026</p>
                </div>
            </div>
        </div>
    );
}
