import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface VideoScrollRendererProps {
    videoPaths: string[]; // Expecting exactly 4 videos for 4 quadrants
    containerRef?: React.RefObject<HTMLElement>;
}

const VideoScrollRenderer = ({ videoPaths, containerRef }: VideoScrollRendererProps) => {
    const localRef = useRef<HTMLDivElement>(null);
    const targetRef = containerRef || localRef;
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Track which video is currently active (0-3)
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef as React.RefObject<HTMLElement>,
        offset: ["start start", "end end"],
    });

    // Optimize: Use useMotionValueEvent to drive the frame updates efficiently
    // without re-rendering the component constantly.
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // 1. Determine active quadrant (0.0-0.25, 0.25-0.5, etc.)
        const quadrant = Math.min(videoPaths.length - 1, Math.floor(latest * videoPaths.length));

        // 2. Determine LOCAL progress within that quadrant (0-1)
        // e.g. if latest is 0.30 and length is 4:
        // 0.30 * 4 = 1.2
        // quadrant = 1 (Clip 2)
        // local = 1.2 - 1 = 0.2 (20% through clip 2)
        const rawProgress = latest * videoPaths.length;
        const localProgress = rawProgress - quadrant;

        // 3. Update active state if changed (for visibility toggling)
        if (quadrant !== activeIndex) {
            setActiveIndex(quadrant);
            // Pause/Reset others? No need if we hide them.
        }

        // 4. Scrub the active video
        const video = videoRefs.current[quadrant];
        if (video && video.duration) {
            // Safety: ensure we don't seek past end
            const time = Math.min(video.duration - 0.01, Math.max(0, localProgress * video.duration));

            // "Fast Seek" logic if available, else setting currentTime
            // Setting currentTime is usually fast enough for local files
            if (Number.isFinite(time)) {
                video.currentTime = time;
            }
        }
    });

    return (
        <div className="relative w-full h-full bg-black">
            {videoPaths.map((path, index) => (
                <video
                    key={path}
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={path}
                    playsInline
                    muted
                    // Preload auto to ensure metadata (duration) is ready
                    preload="auto"
                    className={`absolute inset-0 w-full h-full object-contain bg-black transition-opacity duration-0 ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    // Using object-contain as requested ("fit whole screen ... not cover")
                    style={{ objectFit: "contain" }}
                />
            ))}
        </div>
    );
};

export default VideoScrollRenderer;
