import { useEffect, useState } from "react";
import Lenis from "lenis";
import Loader from "./components/Loader";
import MainExperience from "./components/MainExperience";
import InfoSection from "./components/sections/InfoSection";
import { allFrames } from "./utils/asset-manifest";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Smooth Scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Preload Image Assets Logic
  useEffect(() => {
    let loadedCount = 0;

    // Safety timeout (20s)
    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 20000);

    // Preload first 90 frames (Clip 1) to start
    // If we load all 360, it might take too long.
    // Let's load the first 90 to be safe for the first scroll interaction.
    // The UnifiedScrollRenderer will also try to load them, but browsers cache them.
    const preloadParams = allFrames.slice(0, 90);

    if (preloadParams.length === 0) {
      setIsLoading(false);
      return;
    }

    preloadParams.forEach((path) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === preloadParams.length) {
          clearTimeout(safetyTimeout);
          setTimeout(() => setIsLoading(false), 800);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === preloadParams.length) {
          clearTimeout(safetyTimeout);
          setIsLoading(false);
        }
      }
    });
  }, []);

  return (
    <div className="bg-background text-primary min-h-screen selection:bg-white/20">
      <Loader isLoading={isLoading} />

      <main className={`opacity-0 transition-opacity duration-1000 ${!isLoading ? "opacity-100" : ""}`}>
        <MainExperience />
        <InfoSection />
      </main>
    </div>
  );
}

export default App;
