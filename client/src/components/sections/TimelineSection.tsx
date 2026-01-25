import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "@/lib/constants";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const TimelineItem = ({
    data,
    type,
    index
}: {
    data: any,
    type: "experience" | "education",
    index: number
}) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-center w-full mb-12 md:mb-16 relative ${isEven ? "md:flex-row-reverse" : ""}`}
        >
            {/* Mobile-only Structure */}
            <div className="md:hidden w-full pl-12 relative flex flex-col">
                {/* Mobile View Icon */}
                <div className="absolute left-0 top-0 w-12 flex flex-col items-center h-full">
                    {/* Icon Circle */}
                    <div className={`
              w-10 h-10 rounded-full border-2 border-[#0a0a0a] z-10 flex items-center justify-center shrink-0
              ${type === 'experience' ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}
              shadow-lg
            `}>
                        {type === 'experience' ? <FaBriefcase className="text-xs" /> : <FaGraduationCap className="text-xs" />}
                    </div>
                    {/* Vertical Line */}
                    <div className="w-px bg-white/10 flex-grow mt-2 h-full min-h-[50px] mx-auto relative overflow-hidden">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`w-full absolute top-0 left-0 ${type === 'experience' ? 'bg-blue-500/50' : 'bg-purple-500/50'}`}
                        />
                    </div>
                </div>

                {/* Card Content */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`
                    ml-4 p-5 rounded-2xl backdrop-blur-xl border border-white/5 
                    bg-white/5 transition-all duration-300 hover:bg-white/10 relative origin-left
                    ${type === 'experience' ? 'border-l-blue-500/30' : 'border-l-purple-500/30'}
                `}>
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-lg font-bold text-white leading-tight">
                            {type === 'experience' ? data.title : data.institution}
                        </h3>

                        <p className={`text-base font-medium ${type === 'experience' ? 'text-blue-300' : 'text-purple-300'}`}>
                            {type === 'experience' ? data.company : `${data.degree} in ${data.subject}`}
                        </p>

                        <div className="flex flex-col gap-1 mt-2 text-xs text-gray-400">
                            <span className="flex items-center gap-2">
                                <FaCalendarAlt className="opacity-70" />
                                {data.period}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaMapMarkerAlt className="opacity-70" />
                                {data.location}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>


            {/* Desktop-only Structure (Original) */}
            <div className={`hidden md:block w-full md:w-5/12 ${isEven ? "md:pl-16" : "md:pr-16"}`}>
                <motion.div
                    whileHover={{ y: -5 }}
                    className={`
                    p-6 rounded-2xl backdrop-blur-xl border border-white/5 
                    transition-all duration-300 hover:border-white/20 hover:bg-white/5
                    relative group
                    ${type === 'experience' ? 'bg-blue-500/5' : 'bg-purple-500/5'}
                `}>
                    {/* Connecting Line for Desktop */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "4rem" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`
                        absolute top-1/2 h-px bg-white/20
                        ${isEven ? "-left-16 origin-left" : "-right-16 origin-right"}
                    `} />

                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            {type === 'experience' ? data.title : data.institution}
                        </h3>

                        <p className={`text-lg font-medium ${type === 'experience' ? 'text-blue-300' : 'text-purple-300'}`}>
                            {type === 'experience' ? data.company : `${data.degree} in ${data.subject}`}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                            <span className="flex items-center gap-1.5">
                                <FaCalendarAlt className="text-xs" />
                                {data.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FaMapMarkerAlt className="text-xs" />
                                {data.location}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Center Icon for Desktop */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 + (index * 0.1) }}
                className="hidden md:flex absolute left-1/2 md:-translate-x-1/2 items-center justify-center"
            >
                <div className={`
          w-12 h-12 rounded-full border-4 border-[#0a0a0a] z-10 flex items-center justify-center
          ${type === 'experience' ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}
          shadow-[0_0_20px_rgba(0,0,0,0.5)]
        `}>
                    {type === 'experience' ? <FaBriefcase /> : <FaGraduationCap />}
                </div>
            </motion.div>

            {/* Empty Side for layout balance (Desktop) */}
            <div className="hidden md:block w-full md:w-5/12" />

        </motion.div>
    );
};

const TimelineSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

    // Line animation based on scroll progress
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative py-32 bg-background overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <motion.div
                style={{ opacity, scale }}
                className="container px-4 mx-auto max-w-6xl"
            >
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6"
                    >
                        Experience & Education
                    </motion.h2>
                    <p className="text-xl text-gray-400 font-light">
                        My professional journey and academic background
                    </p>
                </div>

                <div className="relative">
                    {/* Central Line - Animation */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                        />
                    </div>

                    {/* Experience Section */}
                    {EXPERIENCE_DATA.map((item, index) => (
                        <TimelineItem
                            key={`exp-${index}`}
                            data={item}
                            type="experience"
                            index={index}
                        />
                    ))}

                    {/* Education Section */}
                    {EDUCATION_DATA.map((item, index) => (
                        <TimelineItem
                            key={`edu-${index}`}
                            data={item}
                            type="education"
                            index={EXPERIENCE_DATA.length + index}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default TimelineSection;
