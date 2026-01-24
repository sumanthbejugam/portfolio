import { motion } from "framer-motion";

const InfoSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-8 z-20 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/background.jpeg')" }}
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
                    <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
                    <p className="text-xl text-secondary leading-relaxed">
                        I am a Full Stack Developer with a passion for building scalable, high-performance applications.
                        From web and mobile to edge computing and AI, I bridge the gap between hardware and software
                        to create seamless digital experiences.
                    </p>
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
                        className="p-6 border border-glass-border rounded-lg bg-black/40 hover:bg-white/10 transition-all duration-300 group backdrop-blur-md"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent">Email Me</h3>
                        <p className="text-secondary text-sm">sumanthbejugam@gmail.com</p>
                    </a>

                    <a
                        href="https://linkedin.com/in/bejugamsumanth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 border border-glass-border rounded-lg bg-black/40 hover:bg-white/10 transition-all duration-300 group backdrop-blur-md"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent">LinkedIn</h3>
                        <p className="text-secondary text-sm">Connect with me</p>
                    </a>

                    <a
                        href="https://docs.google.com/document/d/1pv7qBODUqVrOBGXt8pZVGLqWUn-_rfy2awr9ZV-s2lE/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 border border-glass-border rounded-lg bg-black/40 hover:bg-white/10 transition-all duration-300 group backdrop-blur-md"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent">Resume</h3>
                        <p className="text-secondary text-sm">View my CV</p>
                    </a>
                </motion.div>

                <footer className="text-center text-sm text-white/30 pt-20">
                    © 2026 Sumanth Bejugam. Built with React, Vite & Framer Motion.
                </footer>
            </div>
        </section>
    );
};

export default InfoSection;
