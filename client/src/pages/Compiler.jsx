import { useState } from 'react';
import Navbar from '../components/Navbar';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, Download, Terminal } from 'lucide-react';
import { runPlayground } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';

const STARTER_TEMPLATES = {
    javascript: `// JavaScript Playground
console.log("Hello, World!");`,
    python: `# Python Playground
print("Hello, World!")`,
    java: `// Java Playground
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    cpp: `// C++ Playground
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`
};

export default function Compiler() {
    const [language, setLanguage] = useState('cpp');
    const [code, setCode] = useState(STARTER_TEMPLATES['cpp']);
    const [output, setOutput] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setLanguage(newLang);
        setCode(STARTER_TEMPLATES[newLang]);
    };

    const handleRun = async () => {
        setIsRunning(true);
        setOutput({ type: 'info', content: 'Running...' });

        try {
            const result = await runPlayground({ code, language });

            if (result.status === 'Success') {
                setOutput({
                    type: 'success',
                    content: `> Output:\n${result.logs.join('\n')}\n> [Done]`
                });
            } else {
                // If it's a runtime error or simulation error
                setOutput({
                    type: 'error',
                    content: `> Error:\n${result.message || 'Unknown error'}\n${result.logs ? '> Logs:\n' + result.logs.join('\n') : ''}`
                });
            }
        } catch (error) {
            setOutput({
                type: 'error',
                content: `> Execution Failed:\n${error.response?.data?.message || error.message}`
            });
        } finally {
            setIsRunning(false);
        }
    };

    return (
        <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <Navbar />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 pt-16 flex flex-col md:flex-row h-[calc(100vh-64px)]"
            >
                {/* Editor Panel */}
                <div className="flex-1 flex flex-col bg-[#1e1e1e] border-r border-[#333]">
                    {/* Toolbar */}
                    <div className="h-12 bg-[#252526] flex items-center justify-between px-4 border-b border-[#333]">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                <Terminal size={16} /> Online Compiler
                            </span>
                            <div className="h-4 w-px bg-[#444]"></div>
                            <select
                                value={language}
                                onChange={handleLanguageChange}
                                className="bg-[#333] text-gray-200 text-sm px-3 py-1 rounded border border-[#444] focus:border-brand-500 outline-none hover:bg-[#3c3c3c] transition-colors cursor-pointer"
                            >
                                <option value="javascript">JavaScript (Node.js)</option>
                                <option value="python">Python 3</option>
                                <option value="java">Java</option>
                                <option value="cpp">C++ (GCC)</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-[#333] transition-colors" title="Reset Code">
                                <RotateCcw size={16} />
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-[#333] transition-colors" title="Download Code">
                                <Download size={16} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleRun}
                                disabled={isRunning}
                                className={`flex items-center gap-2 px-4 py-1.5 rounded text-sm font-bold text-white transition-all ${isRunning ? 'bg-gray-600 cursor-not-allowed animate-pulse' : 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-900/20'}`}
                            >
                                <Play size={14} className={isRunning ? 'animate-spin' : ''} />
                                {isRunning ? 'Running...' : 'Run Code'}
                            </motion.button>
                        </div>
                    </div>

                    {/* Monaco Editor */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <Editor
                            height="100%"
                            language={language === 'nodejs' ? 'javascript' : language}
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
                    </motion.div>
                </div>

                {/* Output Panel */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="h-1/3 md:h-full md:w-1/3 bg-[#1e1e1e] flex flex-col border-t md:border-t-0 md:border-l border-[#333]"
                >
                    <div className="h-10 bg-[#252526] flex items-center px-4 border-b border-[#333]">
                        <span className="text-gray-400 text-sm font-medium">Output Terminal</span>
                    </div>
                    <div className="flex-1 p-4 font-mono text-sm text-gray-300 overflow-auto whitespace-pre-wrap scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                        <AnimatePresence mode='wait'>
                            {!output ? (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-gray-500 italic"
                                >
                                    Code output will appear here...
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={output.type === 'error' ? 'text-red-400' : 'text-green-400'}
                                >
                                    {output.content}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
