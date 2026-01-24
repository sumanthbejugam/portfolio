import ScrollSequence from "../canvas/ScrollSequence";
import { appDevFrames } from "../../utils/asset-manifest";
import { motion } from "framer-motion";

const AppDevSection = () => {
    return (
        <section className="relative">
            <ScrollSequence imagePaths={appDevFrames}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8 }}
                        className="text-center z-10 p-8"
                    >
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                            Mobile First
                        </h2>
                        <p className="text-xl md:text-2xl text-secondary font-light tracking-wide">
                            Native Performance. Cross-Platform Reach.
                        </p>
                    </motion.div>
                </div>
            </ScrollSequence>
        </section>
    );
};

export default AppDevSection;
