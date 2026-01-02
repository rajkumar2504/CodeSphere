import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { getProblem, submitCode } from '../services/api';
import Editor from '@monaco-editor/react';
import { Play, Send, ChevronLeft, Settings, RotateCcw } from 'lucide-react';

export default function ProblemPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [problem, setProblem] = useState(null);
    const [code, setCode] = useState('// Write your code here\n');
    const [language, setLanguage] = useState('javascript');
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                const data = await getProblem(slug);
                setProblem(data);
                if (data.starter_code && data.starter_code[language]) {
                    setCode(data.starter_code[language]);
                }
            } catch (error) {
                console.error("Failed to load problem", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProblem();
    }, [slug]);

    // Update code when language changes
    useEffect(() => {
        if (problem && problem.starter_code && problem.starter_code[language]) {
            setCode(problem.starter_code[language]);
        }
    }, [language, problem]);

    const [activeTab, setActiveTab] = useState('description');

    if (loading) return <div className="text-center mt-20">Loading...</div>;
    if (!problem) return <div className="text-center mt-20">Problem not found</div>;

    const handleRun = async () => {
        setIsRunning(true);
        setOutput({ status: 'running', message: 'Running test cases...' });

        try {
            const result = await submitCode({
                slug,
                code,
                language
            });

            if (result.status === 'Accepted') {
                setOutput({
                    status: 'success',
                    message: 'Accepted',
                    details: `Passed all test cases.`,
                    logs: result.logs || [],
                    fullResult: result
                });
            } else if (result.status === 'Wrong Answer') {
                const failedCase = result.results.find(r => !r.passed);
                setOutput({
                    status: 'error',
                    message: 'Wrong Answer',
                    details: `Input: ${failedCase?.input} | Expected: ${failedCase?.expected} | Got: ${failedCase?.actual}`,
                    logs: result.logs || [],
                    fullResult: result
                });
            } else {
                setOutput({
                    status: 'error',
                    message: result.status || 'Runtime Error',
                    details: result.message || 'Unknown error',
                    logs: result.logs || []
                });
            }

        } catch (error) {
            setOutput({ status: 'error', message: 'Submission failed', details: error.message });
        } finally {
            setIsRunning(false);
        }
    };

    return (
        <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
            <Navbar />

            <div className="flex-1 flex pt-16 h-[calc(100vh-64px)]">
                {/* Left Panel: Problem Description & Solution */}
                <div className="w-1/2 flex flex-col border-r border-gray-200 bg-white">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'description' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab('solution')}
                            className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'solution' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            Solution
                        </button>
                        <button className="flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent">
                            Submissions
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-300">
                        {activeTab === 'description' ? (
                            <>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm font-medium text-gray-500">#{problem.id}</span>
                                    <h1 className="text-2xl font-bold text-gray-900">{problem.title}</h1>
                                    <span className={`px-2 py-0.5 rounded text-xs font-semibold
                                        ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                            problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-red-100 text-red-700'}`}>
                                        {problem.difficulty}
                                    </span>
                                </div>

                                <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: problem.description }} />
                            </>
                        ) : (
                            <div className="prose prose-slate max-w-none">
                                {problem.solution ? (
                                    <div dangerouslySetInnerHTML={{ __html: problem.solution }} />
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                                        <p>No solution available for this problem yet.</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Action Bar */}
                    <div className="h-14 border-t border-gray-200 flex items-center px-6 gap-4 bg-gray-50/50">
                        <button onClick={() => navigate('/problems')} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm">
                            <ChevronLeft size={16} /> All Problems
                        </button>
                    </div>
                </div>

                {/* Right Panel: Code Editor */}
                <div className="w-1/2 flex flex-col bg-[#1e1e1e]">
                    {/* Editor Header */}
                    <div className="h-14 border-b border-[#2d2d2d] flex items-center justify-between px-4 bg-[#1e1e1e]">
                        <div className="flex items-center gap-2">
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="bg-[#2d2d2d] text-gray-300 text-sm px-3 py-1.5 rounded-lg border border-[#3d3d3d] focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
                            >
                                <option value="javascript">JavaScript</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                                <option value="cpp">C++</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleRun}
                                disabled={isRunning}
                                className="flex items-center gap-2 px-4 py-1.5 bg-[#2d2d2d] text-gray-200 rounded-lg hover:bg-[#3d3d3d] hover:text-white transition-all font-medium text-sm border border-[#3d3d3d]"
                            >
                                <Play size={14} className={`text-gray-400 ${isRunning ? 'animate-spin' : ''}`} fill="currentColor" /> Run
                            </button>
                            <button
                                onClick={handleRun}
                                disabled={isRunning}
                                className="flex items-center gap-2 px-4 py-1.5 bg-brand-600 text-white rounded-lg hover:bg-brand-500 transition-all font-medium text-sm shadow-lg shadow-brand-900/20"
                            >
                                <Send size={14} /> Submit
                            </button>
                            <div className="w-px h-4 bg-[#3d3d3d] mx-1"></div>
                            <button className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-[#2d2d2d] transition-colors">
                                <Settings size={18} />
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-[#2d2d2d] transition-colors">
                                <RotateCcw size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Monaco Editor */}
                    <div className="flex-1 relative">
                        <Editor
                            height="100%"
                            language={language}
                            theme="vs-dark"
                            value={code}
                            onChange={setCode}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                padding: { top: 16 },
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                            }}
                        />
                    </div>

                    {/* Editor Footer / Console */}
                    <div className="h-48 border-t border-[#2d2d2d] bg-[#1e1e1e] p-4 overflow-y-auto font-mono text-sm">
                        <div className="flex items-center gap-2 text-gray-400 mb-3 sticky top-0 bg-[#1e1e1e] pb-2 border-b border-[#2d2d2d]/30">
                            <div className={`w-2 h-2 rounded-full ${output?.status === 'success' ? 'bg-green-500' : output?.status === 'error' ? 'bg-red-500' : 'bg-gray-500'}`}></div>
                            Console Output
                        </div>

                        {!output && <div className="text-gray-600 italic">Run your code to see the output...</div>}

                        {output && (
                            <div className="space-y-3">
                                <div className={`font-semibold ${output.status === 'success' ? 'text-green-400' : output.status === 'error' ? 'text-red-400' : 'text-gray-300'}`}>
                                    [{output.status === 'success' ? 'Success' : 'Error'}] {output.message}
                                </div>

                                {output.logs && output.logs.length > 0 && (
                                    <div className="space-y-1">
                                        <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Logs:</div>
                                        {output.logs.map((log, i) => (
                                            <div key={i} className="text-gray-300 pl-2 border-l-2 border-gray-700">{log}</div>
                                        ))}
                                    </div>
                                )}

                                {output.details && (
                                    <div className="p-3 bg-red-900/10 border border-red-900/30 rounded-lg text-red-300 whitespace-pre-wrap">
                                        {output.details}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
