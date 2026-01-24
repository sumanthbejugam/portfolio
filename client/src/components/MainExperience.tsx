import { useRef } from "react";
import UnifiedScrollRenderer from "./canvas/UnifiedScrollRenderer";
import ScrollTextOverlay from "./canvas/ScrollTextOverlay";
import { allFrames } from "../utils/asset-manifest";

const MainExperience = () => {
    // We create the ref here and pass it to both the Renderer (for useScroll) and Overlays
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative h-[1600vh] w-full bg-background">
            {/* The Sticky Canvas Renderer */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <UnifiedScrollRenderer imagePaths={allFrames} containerRef={containerRef} />

                {/* Text Overlays Layer */}
                {/* These sit ON TOP of the canvas (z-10) and fade in/out based on the MAIN container scroll */}

                {/* Intro / Web Dev (0% - 20%) */}
                <ScrollTextOverlay showRange={[0.01, 0.20]} containerRef={containerRef}>
                    <div className="text-center">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                            Full Stack
                        </h2>
                        <p className="text-xl md:text-2xl text-secondary font-light tracking-wide">
                            Architecting Scalable Web Solutions
                        </p>
                    </div>
                </ScrollTextOverlay>

                {/* Mobile Dev (25% - 45%) */}
                <ScrollTextOverlay showRange={[0.26, 0.45]} containerRef={containerRef}>
                    <div className="text-center">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                            Mobile First
                        </h2>
                        <p className="text-xl md:text-2xl text-secondary font-light tracking-wide">
                            Native Performance. Cross-Platform Reach.
                        </p>
                    </div>
                </ScrollTextOverlay>

                {/* AI Dev (50% - 70%) */}
                <ScrollTextOverlay showRange={[0.51, 0.70]} containerRef={containerRef}>
                    <div className="text-center">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                            AI Powered
                        </h2>
                        <p className="text-xl md:text-2xl text-secondary font-light tracking-wide">
                            Integrating Intelligence into Every Layer
                        </p>
                    </div>
                </ScrollTextOverlay>

                {/* IoT Dev (75% - 95%) */}
                <ScrollTextOverlay showRange={[0.76, 0.95]} containerRef={containerRef}>
                    <div className="text-center">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                            IoT & Edge
                        </h2>
                        <p className="text-xl md:text-2xl text-secondary font-light tracking-wide">
                            Bridging the Physical and Digital Worlds
                        </p>
                    </div>
                </ScrollTextOverlay>
            </div>
        </div>
    );
};

export default MainExperience;
