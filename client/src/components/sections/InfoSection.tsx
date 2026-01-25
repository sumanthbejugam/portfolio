import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { ResumeDialog } from "@/components/resume-dialog";

const InfoSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-8 z-20 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${import.meta.env.BASE_URL}assets/background.jpeg')` }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            <div className="max-w-4xl w-full space-y-16 relative z-10">

                {/* Intro / About */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="p-8 md:p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
                        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                            I am a Software Development Engineer with a passion for building scalable, high-performance applications.
                            From web and mobile to edge computing and AI, I bridge the gap between hardware and software
                            to create seamless digital experiences.
                        </p>
                    </div>
                </motion.div>

                {/* Contact Links */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    <a
                        href="mailto:sumanthbejugam@gmail.com"
                        className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center gap-4"
                    >
                        <FaEnvelope className="text-4xl text-white/80 group-hover:text-white transition-colors" />
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-2">Email Me</h3>
                            <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">sumanthbejugam@gmail.com</p>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sumanthbejugam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center gap-4"
                    >
                        <FaLinkedin className="text-4xl text-white/80 group-hover:text-white transition-colors" />
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-2">LinkedIn</h3>
                            <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">Connect with me</p>
                        </div>
                    </a>

                    <ResumeDialog>
                        <button
                            className="w-full h-full p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center gap-4 cursor-pointer"
                        >
                            <FaFileAlt className="text-4xl text-white/80 group-hover:text-white transition-colors" />
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Resume</h3>
                                <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">View my CV</p>
                            </div>
                        </button>
                    </ResumeDialog>
                </motion.div>

                <footer className="text-center text-sm text-white/30 pt-20">
                    © 2026 Sumanth Bejugam.
                </footer>
            </div>
        </section>
    );
};

export default InfoSection;
