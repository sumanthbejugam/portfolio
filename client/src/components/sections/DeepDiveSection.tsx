import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DEEP_DIVE_DATA } from "@/lib/constants";
import { FaCode } from "react-icons/fa";

// Helper to parse bold markdown
const BoldText = ({ text }: { text: string }) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
        <span>
            {parts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <span key={index} className="font-bold text-white">{part.slice(2, -2)}</span>;
                }
                return <span key={index}>{part}</span>;
            })}
        </span>
    );
};

const CodeWindow = ({ code, language = "python" }: { code: string, language?: string }) => {
    return (
        <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl w-full max-w-lg mx-auto transform transition-all hover:scale-[1.02] duration-300">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-auto text-xs text-gray-500 font-mono">solution.py</div>
            </div>
            {/* Code Area */}
            <div className="p-0 text-sm md:text-sm overflow-x-auto custom-scrollbar">
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}
                    showLineNumbers={true}
                    wrapLines={true}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

const TechnologyBadge = ({ tech }: { tech: string }) => (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
        {tech}
    </span>
);

const DeepDiveItem = ({ item, index }: { item: any; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex-1 space-y-8"
            >
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                        <FaCode /> Engineering Highlight 0{index + 1}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        {item.title}
                    </h3>
                </div>

                <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-red-500/30">
                        <h4 className="text-sm font-semibold text-red-400 mb-2 uppercase tracking-wide">The Challenge</h4>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            <BoldText text={item.challenge} />
                        </p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-emerald-500/30">
                        <h4 className="text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wide">The Solution</h4>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            <BoldText text={item.solution} />
                        </p>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="flex flex-wrap gap-3">
                        {item.technologies.map((tech: string) => (
                            <TechnologyBadge key={tech} tech={tech} />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50, rotate: isEven ? 2 : -2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                className="flex-1 w-full"
            >
                <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    {item.visualType === 'code' ? (
                        <CodeWindow code={item.code} />
                    ) : (
                        <div className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                            <span className="text-gray-500">Visual Placeholder</span>
                        </div>
                    )}
                </div>
            </motion.div>

        </div>
    );
};

const DeepDiveSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="relative py-32 bg-background overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />


            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/50 mb-6">
                        Technical Deep Dive
                    </h2>
                    <p className="text-xl text-gray-400 font-light">
                        Highlighting complex architectural decisions and engineering challenges I've solved.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Optional, subtle vertical line) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />

                    {DEEP_DIVE_DATA.map((item, index) => (
                        <DeepDiveItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DeepDiveSection;
