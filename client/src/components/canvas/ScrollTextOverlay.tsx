import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollTextOverlayProps {
    // Range: [startScroll, endScroll] normalized 0-1
    showRange: [number, number];
    children: React.ReactNode;
    containerRef: React.RefObject<HTMLDivElement>;
    noExitAnimation?: boolean;
    progress?: MotionValue<number>;
}

const ScrollTextOverlay = ({ showRange, children, containerRef, noExitAnimation = false, progress }: ScrollTextOverlayProps) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const activeProgress = progress || scrollYProgress;

    // Fade in at start of range, Fade out at end of range
    // e.g. [0.1, 0.3] -> 
    // 0.0-0.1: opacity 0
    // 0.1-0.15: opacity 0->1
    // 0.25-0.3: opacity 1->0

    const [start, end] = showRange;
    const fadeInEnd = start + ((end - start) * 0.2); // First 20% of range
    const fadeOutStart = noExitAnimation ? end + 1 : end - ((end - start) * 0.2); // Last 20% of range (disabled if noExit)

    const isStart = start === 0;

    const opacity = useTransform(
        activeProgress,
        [start, fadeInEnd, fadeOutStart, end],
        isStart ? [1, 1, 1, 0] : [0, 1, 1, 0]
    );

    const y = useTransform(
        activeProgress,
        [start, fadeInEnd, fadeOutStart, end],
        isStart ? [0, 0, 0, -50] : [50, 0, 0, -50]
    );

    const visibility = useTransform(
        activeProgress,
        (val) => {
            if (noExitAnimation) {
                return val >= start ? "visible" : "hidden";
            }
            return (val >= start && val <= end) ? "visible" : "hidden";
        }
    );

    return (
        <motion.div
            style={{ opacity, y, visibility, pointerEvents: "none" }}
            className="absolute inset-0 flex items-center justify-center z-10 p-8"
        >
            {children}
        </motion.div>
    );
};

export default ScrollTextOverlay;
