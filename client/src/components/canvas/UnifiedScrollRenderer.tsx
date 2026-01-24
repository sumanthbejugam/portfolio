import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface UnifiedScrollRendererProps {
    imagePaths: string[];
    containerRef?: React.RefObject<HTMLElement>;
}

const UnifiedScrollRenderer = ({ imagePaths, containerRef }: UnifiedScrollRendererProps) => {
    const localRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const targetRef = containerRef || localRef; // Use external ref if provided

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    // Scroll Progress Normalization
    const { scrollYProgress } = useScroll({
        target: targetRef as React.RefObject<HTMLElement>,
        offset: ["start start", "end end"],
    });

    // Map scroll (0 to 1) to image index (0 to length - 1)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, imagePaths.length - 1]);

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const imgObjects = imagePaths.map((path) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === imagePaths.length) {
                    setLoaded(true);
                }
            };
            return img;
        });
        setImages(imgObjects);
    }, [imagePaths]);

    // Draw Logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const renderFrame = (index: number) => {
            // Safety check index
            const idx = Math.min(imagePaths.length - 1, Math.max(0, index));
            const img = images[idx];

            // If image isn't loaded yet, try to draw previous one or just wait
            if (!img || !img.complete) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth = canvas.width;
            let drawHeight = canvas.height;
            let offsetX = 0;
            let offsetY = 0;

            // CONTAIN Logic (Fit screen to avoid pixelation)
            if (canvasRatio > imgRatio) {
                // Canvas is wider than image -> fit height
                drawHeight = canvas.height;
                drawWidth = canvas.height * imgRatio;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            } else {
                // Canvas is taller than image -> fit width
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgRatio;
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        // Animation Loop
        let animId: number;
        const render = () => {
            renderFrame(Math.round(frameIndex.get()));
            animId = requestAnimationFrame(render);
        }

        // Only start loop if loaded
        if (loaded) {
            render();
        }

        return () => cancelAnimationFrame(animId);
    }, [loaded, frameIndex, images, imagePaths.length]);

    return <canvas ref={canvasRef} className="block w-full h-full" />;
};

export default UnifiedScrollRenderer;
