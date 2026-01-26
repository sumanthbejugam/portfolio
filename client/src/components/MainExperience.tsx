import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import UnifiedScrollRenderer from "./canvas/UnifiedScrollRenderer";
import ScrollTextOverlay from "./canvas/ScrollTextOverlay";
import { allFrames } from "../utils/asset-manifest";
import {
    FaReact, FaNodeJs, FaAws, FaAndroid, FaJava, FaBrain, FaRobot, FaCogs, FaChevronDown
} from "react-icons/fa";
import {
    SiNextdotjs, SiVite, SiDjango, SiFlask, SiExpress, SiFastapi, SiStreamlit,
    SiFlutter, SiKotlin, SiLangchain, SiTensorflow
} from "react-icons/si";
import { MdSmartToy } from "react-icons/md";
import { TbBrandReact } from "react-icons/tb";

interface SkillItem {
    name: string;
    icon: React.ElementType;
}

import { FaArrowRight } from "react-icons/fa";

const SplitGlassCard = ({ title, subtitle, skills, projects, color }: { title: string, subtitle: string, skills: SkillItem[], projects: string[], color: string }) => {
    const [activeTab, setActiveTab] = useState<'skills' | 'projects'>('skills');

    const ProjectItem = ({ project, color }: { project: string, color: string }) => (
        <li className="group flex items-center justify-between gap-4 text-sm md:text-base text-gray-300 bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 p-4 rounded-md transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3">
                <span className={`w-2 h-8 rounded-full bg-gradient-to-b ${color}`} />
                <span className="font-medium group-hover:text-white transition-colors">{project}</span>
            </div>
            {/* <div className={`p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                <FaArrowRight className="text-white text-xs" />
            </div> */}
        </li>
    );

    return (
        <div className="w-full max-w-[95%] md:max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 pointer-events-none">
            {/* Mobile View: Unified Card with Tabs */}
            <div className="md:hidden w-full p-6 rounded-lg backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl pointer-events-auto flex flex-col">
                <div className="mb-6">
                    <h2 className={`text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${color}`}>
                        {title}
                    </h2>
                    <p className="text-sm text-gray-200 font-light leading-snug opacity-90">
                        {subtitle}
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex p-1 bg-white/5 rounded-xl mb-6 relative border border-white/5">
                    <button
                        onClick={() => setActiveTab('skills')}
                        className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all duration-300 ${activeTab === 'skills' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                    >
                        Key Skills
                    </button>
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all duration-300 ${activeTab === 'projects' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                    >
                        Projects
                    </button>
                </div>

                {/* Content Area */}
                <div className="min-h-[220px] max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                    {activeTab === 'skills' ? (
                        <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            {skills.map((skill, i) => (
                                <span key={i} className="px-3 py-2 text-xs rounded-md bg-white/5 text-white/90 border border-white/10 flex items-center gap-2.5">
                                    <skill.icon className="text-sm opacity-80" />
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <ul className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            {projects.map((project, i) => (
                                <ProjectItem key={i} project={project} color={color} />
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Desktop View: Left Card (Title, Subtitle, Skills) */}
            <div className={`hidden md:flex flex-1 p-8 rounded-lg backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl pointer-events-auto hover:bg-black/50 transition-colors duration-300 self-stretch flex-col justify-center`}>
                <h2 className={`text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${color}`}>
                    {title}
                </h2>
                <p className="text-xl text-gray-200 mb-8 font-light leading-relaxed">
                    {subtitle}
                </p>
                <div>
                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Key Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, i) => (
                            <span key={i} className="px-4 py-2 text-sm rounded-md bg-white/5 text-white/90 border border-white/10 flex items-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-default">
                                <skill.icon className="text-lg opacity-80" />
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop View: Right Card (Projects) */}
            <div className={`hidden md:flex flex-1 p-8 rounded-lg backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl pointer-events-auto hover:bg-black/50 transition-colors duration-300 self-stretch flex-col justify-center`}>
                <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">Featured Projects</h3>
                <ul className="space-y-4">
                    {projects.map((project, i) => (
                        <ProjectItem key={i} project={project} color={color} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

const MainExperience = () => {
    // We create the ref here and pass it to both the Renderer (for useScroll) and Overlays
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div ref={containerRef} className="relative h-[1600vh] w-full bg-background">
            {/* The Sticky Canvas Renderer */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <UnifiedScrollRenderer
                    imagePaths={allFrames}
                    containerRef={containerRef}
                    isMobile={isMobile}
                />

                {/* Text Overlays Layer */}
                {/* 0% - Intro */}
                <ScrollTextOverlay showRange={[0.00, 0.15]} containerRef={containerRef}>
                    <div className="text-center p-8">
                        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl">
                            Sumanth<br />Bejugam
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide mb-8">
                            SDE | Full Stack | AI | Mobile
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Building scalable, intelligent solutions that bridge the gap between complex backend systems and intuitive user experiences.
                        </p>

                        <motion.div
                            style={{ x: "-50%" }}
                            initial={{ opacity: 0.5, y: 10 }}
                            animate={{ opacity: 1, y: [0, 10, 0] }}
                            transition={{
                                opacity: { duration: 1, delay: 1 },
                                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute bottom-0 left-1/2 mb-16 flex flex-col items-center gap-3"
                        >
                            <span className="text-xs md:text-sm font-light tracking-[0.2em] text-white/50 uppercase">
                                Scroll down for an experience
                            </span>
                            <FaChevronDown className="text-white/50 text-xl" />
                        </motion.div>
                    </div>
                </ScrollTextOverlay>

                {/* 20% - Web Development */}
                <ScrollTextOverlay showRange={[0.18, 0.35]} containerRef={containerRef}>
                    <SplitGlassCard
                        title="Web Development"
                        subtitle="Scalable SaaS & Cloud Architectures"
                        color="from-blue-400 to-cyan-300"
                        skills={[
                            { name: 'React', icon: FaReact },
                            { name: 'Next.js', icon: SiNextdotjs },
                            { name: 'Vite', icon: SiVite },
                            { name: 'Django', icon: SiDjango },
                            { name: 'Flask', icon: SiFlask },
                            { name: 'Node.js', icon: FaNodeJs },
                            { name: 'Express.js', icon: SiExpress },
                            { name: 'FastAPI', icon: SiFastapi },
                            { name: 'Streamlit', icon: SiStreamlit },
                            { name: 'AWS', icon: FaAws },
                            { name: 'DevOps', icon: FaCogs },
                        ]}
                        projects={[
                            "Multi-tenant SaaS Super App using Next.js & Django",
                            "Simulation Platform Modernization (Flask -> Django)",
                            "High-Performance Marketing Websites"
                        ]}
                    />
                </ScrollTextOverlay>

                {/* 40% - Mobile Development */}
                <ScrollTextOverlay showRange={[0.38, 0.55]} containerRef={containerRef}>
                    <SplitGlassCard
                        title="Mobile Development"
                        subtitle="Native Performance, Cross-Platform Reach"
                        color="from-green-400 to-emerald-300"
                        skills={[
                            { name: 'Flutter', icon: SiFlutter },
                            { name: 'React Native', icon: TbBrandReact },
                            { name: 'Android Java', icon: FaAndroid },
                            { name: 'Kotlin', icon: SiKotlin },
                        ]}
                        projects={[
                            "Tic Trac - Movie Booking Tracker (20k+ Downloads)",
                            "Lock Down Mart - Local E-commerce & Queueing",
                            "Reach Alert - Location Based Alarm System"
                        ]}
                    />
                </ScrollTextOverlay>

                {/* 60% - AI Development */}
                <ScrollTextOverlay showRange={[0.58, 0.75]} containerRef={containerRef}>
                    <SplitGlassCard
                        title="AI & ML Integration"
                        subtitle="Intelligent Workflows & Data Systems"
                        color="from-purple-400 to-pink-300"
                        skills={[
                            { name: 'LLM Integration', icon: FaBrain },
                            { name: 'RAG', icon: FaBrain },
                            { name: 'Agentic AI', icon: FaRobot },
                            { name: 'LangChain', icon: SiLangchain },
                            { name: 'CrewAI', icon: MdSmartToy },
                        ]}
                        projects={[
                            "Agentic AI Workflows for Business Automation",
                            "Domain-Isolated RAG Chatbots",
                            "Wi-Fi Signal Localization using ML"
                        ]}
                    />
                </ScrollTextOverlay>

                {/* 80% - IoT Development */}
                <ScrollTextOverlay showRange={[0.78, 0.95]} containerRef={containerRef} noExitAnimation>
                    <SplitGlassCard
                        title="IoT & Edge Computing"
                        subtitle="Bridging Physical & Digital Worlds"
                        color="from-orange-400 to-amber-300"
                        skills={[
                            { name: 'IoT', icon: FaCogs },
                            { name: 'ESP32', icon: FaCogs },
                            { name: 'Arduino', icon: FaCogs },
                            { name: 'MQTT', icon: FaCogs },
                            { name: 'Raspberry Pi', icon: FaCogs },
                            { name: 'C++', icon: FaCogs },
                        ]}
                        projects={[
                            "Intelli Switch - Smart Home Automation System",
                            "Robotic Eye Control via BLE & WebSockets",
                            "Smart Sensor Integration"
                        ]}
                    />
                </ScrollTextOverlay>
            </div>
        </div>
    );
};

export default MainExperience;
