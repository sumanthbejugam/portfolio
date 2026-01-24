import { useRef } from "react";
import UnifiedScrollRenderer from "./canvas/UnifiedScrollRenderer";
import ScrollTextOverlay from "./canvas/ScrollTextOverlay";
import { allFrames } from "../utils/asset-manifest";

const SplitGlassCard = ({ title, subtitle, skills, projects, color }: { title: string, subtitle: string, skills: string[], projects: string[], color: string }) => (
    <div className="w-full max-w-[90%] md:max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-32 pointer-events-none">
        {/* Left Card: Title, Subtitle, Skills */}
        <div className={`flex-1 p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl pointer-events-auto hover:bg-black/50 transition-colors duration-300 self-stretch flex flex-col justify-center`}>
            <h2 className={`text-3xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${color}`}>
                {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6 font-light">
                {subtitle}
            </p>
            <div>
                <h3 className="text-sm font-semibold text-white/80 mb-3 border-b border-white/10 pb-2">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/90 border border-white/5">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Card: Projects */}
        <div className={`flex-1 p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl pointer-events-auto hover:bg-black/50 transition-colors duration-300 self-stretch flex flex-col justify-center`}>
            <h3 className="text-xl font-semibold text-white/80 mb-4 border-b border-white/10 pb-2">Featured Projects</h3>
            <ul className="space-y-4">
                {projects.map((project, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                        <span className={`mt-1.5 w-2 h-2 shrink-0 rounded-full bg-gradient-to-r ${color}`} />
                        {project}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const MainExperience = () => {
    // We create the ref here and pass it to both the Renderer (for useScroll) and Overlays
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative h-[1600vh] w-full bg-background">
            {/* The Sticky Canvas Renderer */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <UnifiedScrollRenderer imagePaths={allFrames} containerRef={containerRef} />

                {/* Text Overlays Layer */}
                {/* 0% - Intro */}
                <ScrollTextOverlay showRange={[0.00, 0.15]} containerRef={containerRef}>
                    <div className="text-center p-8 backdrop-blur-sm bg-black/20 rounded-3xl border border-white/5">
                        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl">
                            Sumanth<br />Bejugam
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide">
                            Full Stack | AI | IoT
                        </p>
                    </div>
                </ScrollTextOverlay>

                {/* 20% - Web Development */}
                <ScrollTextOverlay showRange={[0.18, 0.35]} containerRef={containerRef}>
                    <SplitGlassCard
                        title="Web Development"
                        subtitle="Scalable SaaS & Cloud Architectures"
                        color="from-blue-400 to-cyan-300"
                        skills={['React', 'Next.js', 'Django', 'AWS', 'PostgreSQL', 'Docker', 'System Design']}
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
                        skills={['Flutter', 'React Native', 'Android Native', 'Dart', 'Firebase', 'Google Maps API']}
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
                        skills={['Python', 'RAG Pipelines', 'LangChain', 'OpenAI API', 'TensorFlow', 'Computer Vision']}
                        projects={[
                            "Agentic AI Workflows for Business Automation",
                            "Domain-Isolated RAG Chatbots",
                            "Wi-Fi Signal Localization using ML"
                        ]}
                    />
                </ScrollTextOverlay>

                {/* 80% - IoT Development */}
                <ScrollTextOverlay showRange={[0.78, 0.95]} containerRef={containerRef}>
                    <SplitGlassCard
                        title="IoT & Edge Computing"
                        subtitle="Bridging Physical & Digital Worlds"
                        color="from-orange-400 to-amber-300"
                        skills={['ESP32', 'Arduino', 'MQTT', 'Raspberry Pi', 'C++', 'BLE Communication']}
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
