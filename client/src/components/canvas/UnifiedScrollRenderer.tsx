import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface UnifiedScrollRendererProps {
    imagePaths: string[];
    containerRef?: React.RefObject<HTMLElement>;
    isMobile?: boolean;
}

const UnifiedScrollRenderer = ({ imagePaths, containerRef, isMobile = false }: UnifiedScrollRendererProps) => {
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

    const maxIndex = imagePaths.length - 1;

    // Frame Mapping Logic
    // Mobile: 1:1 sync up to 75%, then accelerate to finish at 95%, holding 5% buffer
    // Desktop: Standard 0-1 mapping
    const inputRange = isMobile ? [0, 0.75, 1, 1] : [0, 1];
    const outputRange = isMobile ? [0, 0.75 * maxIndex, maxIndex, maxIndex] : [0, maxIndex];

    const frameIndex = useTransform(scrollYProgress, inputRange, outputRange);

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

            // Mobile check
            const isMobile = window.innerWidth < 768;

            if (isMobile) {
                // COVER Logic (Fill screen on mobile)
                if (canvasRatio > imgRatio) {
                    // Canvas is wider than image -> match width, overflow height
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgRatio;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    // Canvas is taller than image (normal mobile) -> match height, overflow width
                    drawHeight = canvas.height;
                    drawWidth = canvas.height * imgRatio;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }
            } else {
                // CONTAIN Logic (Fit screen to avoid pixelation on web)
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
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1.0; // 100% opacity
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            ctx.globalAlpha = 1.0; // Reset opacity

            // Black Overlay
            ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        // Animation Loop
        let animId: number;
        const render = () => {
            renderFrame(Math.round(frameIndex.get()));
            animId = requestAnimationFrame(render);
        }

        // Start loop immediately as long as we have image objects
        // The individual renderFrame function already checks if an image is loaded
        if (images.length > 0) {
            render();
        }

        return () => cancelAnimationFrame(animId);
    }, [loaded, frameIndex, images, imagePaths.length]);

    return <canvas ref={canvasRef} className="block w-full h-full" />;
};

export default UnifiedScrollRenderer;
