import Navbar from '../components/Navbar';
import { Map, CheckCircle, Lock, ArrowRight, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Roadmap() {
    const navigate = useNavigate();

    const steps = [
        { id: 1, title: "Arrays & Hashing", status: "completed", total: 9, completed: 9, color: "text-green-500", topics: ["Contains Duplicate", "Valid Anagram", "Two Sum", "Group Anagrams"] },
        { id: 2, title: "Two Pointers", status: "completed", total: 5, completed: 5, color: "text-green-500", topics: ["Valid Palindrome", "3Sum", "Container With Most Water"] },
        { id: 3, title: "Sliding Window", status: "in-progress", total: 6, completed: 2, color: "text-blue-500", topics: ["Best Time to Buy/Sell Stock", "Longest Substring Without Repeating Characters"] },
        { id: 4, title: "Stack", status: "locked", total: 7, completed: 0, color: "text-gray-400", topics: ["Valid Parentheses", "Min Stack", "Evaluate Reverse Polish Notation"] },
        { id: 5, title: "Binary Search", status: "locked", total: 7, completed: 0, color: "text-gray-400", topics: ["Binary Search", "Search a 2D Matrix", "Koko Eating Bananas"] },
        { id: 6, title: "Linked List", status: "locked", total: 11, completed: 0, color: "text-gray-400", topics: ["Reverse Linked List", "Merge Two Sorted Lists", "Reorder List"] },
        { id: 7, title: "Trees", status: "locked", total: 15, completed: 0, color: "text-gray-400", topics: ["Invert Binary Tree", "Maximum Depth of Binary Tree", "Diameter of Binary Tree"] },
        { id: 8, title: "Tries", status: "locked", total: 3, completed: 0, color: "text-gray-400", topics: ["Implement Trie", "Design Add and Search Words Data Structure"] },
        { id: 9, title: "Heap / Priority Queue", status: "locked", total: 7, completed: 0, color: "text-gray-400", topics: ["Kth Largest Element in a Stream", "Last Stone Weight", "K Closest Points to Origin"] },
        { id: 10, title: "Backtracking", status: "locked", total: 9, completed: 0, color: "text-gray-400", topics: ["Subsets", "Combination Sum", "Permutations"] },
        { id: 11, title: "Graphs", status: "locked", total: 13, completed: 0, color: "text-gray-400", topics: ["Number of Islands", "Max Area of Island", "Clone Graph"] },
        { id: 12, title: "Advanced Graphs", status: "locked", total: 6, completed: 0, color: "text-gray-400", topics: ["Reconstruct Itinerary", "Min Cost to Connect All Points"] },
        { id: 13, title: "1-D Dynamic Programming", status: "locked", total: 12, completed: 0, color: "text-gray-400", topics: ["Climbing Stairs", "Min Cost Climbing Stairs", "House Robber"] },
        { id: 14, title: "2-D Dynamic Programming", status: "locked", total: 11, completed: 0, color: "text-gray-400", topics: ["Unique Paths", "Longest Common Subsequence"] },
        { id: 15, title: "Greedy", status: "locked", total: 8, completed: 0, color: "text-gray-400", topics: ["Maximum Subarray", "Jump Game"] },
        { id: 16, title: "Intervals", status: "locked", total: 6, completed: 0, color: "text-gray-400", topics: ["Insert Interval", "Merge Intervals"] },
        { id: 17, title: "Math & Geometry", status: "locked", total: 8, completed: 0, color: "text-gray-400", topics: ["Rotate Image", "Spiral Matrix"] },
        { id: 18, title: "Bit Manipulation", status: "locked", total: 7, completed: 0, color: "text-gray-400", topics: ["Single Number", "Number of 1 Bits"] },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-medium text-xs mb-4">
                        <Map size={14} /> LEARNING PATH
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">The NeetCode 150 Roadmap</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A structured guide to master Data Structures and Algorithms. Follow this path to be interview-ready for top tech companies.
                    </p>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-8 before:w-0.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:dark:via-gray-700 before:to-transparent">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                            {/* Icon/Timeline Dot */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white dark:border-gray-900 bg-gray-50 dark:bg-gray-800 shadow-xl z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:static">
                                {step.status === 'completed' ? (
                                    <div className="w-full h-full rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                        <CheckCircle size={28} className="fill-current" />
                                    </div>
                                ) : step.status === 'in-progress' ? (
                                    <div className="w-full h-full rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 animate-pulse">
                                        <ArrowRight size={28} />
                                    </div>
                                ) : (
                                    <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                                        <Lock size={24} />
                                    </div>
                                )}
                            </div>

                            {/* Card content */}
                            <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className={`text-xl font-bold mb-1 ${step.status === 'locked' ? 'text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                                            {step.title}
                                        </h3>
                                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            {step.completed}/{step.total} Completed
                                        </div>
                                    </div>
                                    {step.status !== 'locked' && (
                                        <button
                                            onClick={() => navigate('/problems')}
                                            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${step.status === 'completed'
                                                    ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300'
                                                    : 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20'
                                                }`}>
                                            {step.status === 'completed' ? 'Review' : 'Continue'}
                                            {step.status === 'in-progress' && <PlayCircle size={14} className="ml-1" />}
                                        </button>
                                    )}
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mb-4 overflow-hidden">
                                    <div
                                        className={`h-1.5 rounded-full transition-all duration-1000 ${step.status === 'completed' ? 'bg-green-500' :
                                                step.status === 'in-progress' ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'
                                            }`}
                                        style={{ width: `${(step.completed / step.total) * 100}%` }}
                                    ></div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {step.topics.slice(0, 3).map((topic, i) => (
                                        <span key={i} className="px-2 py-1 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 text-xs rounded border border-gray-100 dark:border-gray-700 truncate max-w-full">
                                            {topic}
                                        </span>
                                    ))}
                                    {step.topics.length > 3 && (
                                        <span className="px-2 py-1 text-gray-400 text-xs text-xs">+ {step.topics.length - 3} more</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
