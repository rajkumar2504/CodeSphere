
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Code2, Trophy, MessageSquare, Terminal, ChevronRight, Briefcase, Target, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

function Home() {
    const navigate = useNavigate();
    const { currentUser } = useAuth();


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const blobVariants = {
        animate: {
            scale: [1, 1.1, 1],
            x: [0, 30, -30, 0],
            y: [0, -50, 20, 0],
            transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 selection:bg-brand-100 dark:selection:bg-brand-900 transition-colors duration-300 overflow-x-hidden">
            <Navbar />

            {/* Ambient Animated Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    variants={blobVariants}
                    animate="animate"
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-400/20 blur-[100px] dark:bg-brand-900/20"
                />
                <motion.div
                    variants={blobVariants}
                    animate="animate"
                    transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[100px] dark:bg-blue-900/20"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-purple-400/10 blur-[90px] dark:bg-purple-900/10"
                />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-brand-100 dark:border-brand-500/30 text-brand-700 dark:text-brand-300 font-medium text-sm mb-8 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                            </span>
                            New: AI-Powered Code Analysis is live!
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8 leading-[1.1]"
                        >
                            Master Data Structures & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-500 to-cyan-500 animate-gradient-x">Algorithms</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto"
                        >
                            The professional platform to prepare for coding interviews. Solve real problems, compete in global contests, and <span className="text-brand-600 dark:text-brand-400 font-semibold">level up your career.</span>
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
                            <button onClick={() => navigate('/problems')} className="px-8 py-4 bg-gray-900 dark:bg-brand-600 text-white font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-brand-500 transition-all shadow-xl shadow-gray-900/20 dark:shadow-brand-500/30 hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-2 animate-pulse">
                                Start Coding Now <ChevronRight size={20} />
                            </button>

                        </motion.div>
                    </motion.div>

                    {/* Feature Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32"
                    >
                        {[
                            {
                                icon: <Terminal className="text-brand-600" size={32} />,
                                title: "DSA Practice & Challenges",
                                desc: "Solve curated practice sets and coding challenges to master Data Structures & Algorithms.",
                                link: "/problems",
                                color: "bg-brand-50 dark:bg-brand-900/20"
                            },
                            {
                                icon: <Trophy className="text-orange-500" size={32} />,
                                title: "Contests & Competitions",
                                desc: "Join weekly and biweekly contests to test your skills against global peers.",
                                link: "/contests",
                                color: "bg-orange-50 dark:bg-orange-900/20"
                            },
                            {
                                icon: <Briefcase className="text-blue-500" size={32} />,
                                title: "Interview Preparation",
                                desc: "Get expert guidance, mock interviews, and curated resources for job readiness.",
                                link: "/mock-interview",
                                color: "bg-blue-50 dark:bg-blue-900/20"
                            },
                            {
                                icon: <Target className="text-red-500" size={32} />,
                                title: "Company-Specific Questions",
                                desc: "Practice with real interview questions from top tech companies to ace your dream job.",
                                link: "/companies",
                                color: "bg-red-50 dark:bg-red-900/20"
                            },
                            {
                                icon: <BookOpen className="text-green-500" size={32} />,
                                title: "Community & Articles",
                                desc: "Access a rich library of articles, coding tips, and peer discussions.",
                                link: "/discuss",
                                color: "bg-green-50 dark:bg-green-900/20"
                            },
                            {
                                icon: <Code2 className="text-purple-500" size={32} />,
                                title: "Sandboxed Execution",
                                desc: "Run your code safely in isolated environments with support for multiple languages.",
                                link: "/compiler",
                                color: "bg-purple-50 dark:bg-purple-900/20"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                onClick={() => navigate(feature.link)}
                                className="p-8 rounded-3xl bg-white dark:bg-gray-800/80 backdrop-blur border border-gray-100 dark:border-gray-700/50 hover:border-brand-200 dark:hover:border-brand-700/80 transition-all hover:shadow-2xl hover:shadow-brand-500/10 group cursor-pointer"
                            >
                                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>


        </div>
    )
}

export default Home
