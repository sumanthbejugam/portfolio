import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ScrollSequenceProps {
    imagePaths: string[];
    heightClass?: string;
    onDraw?: (context: CanvasRenderingContext2D, width: number, height: number) => void;
    children?: React.ReactNode;
}

const ScrollSequence = ({ imagePaths, heightClass = "h-[400vh]", children }: ScrollSequenceProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    // Scroll Progress Normalization
    const { scrollYProgress } = useScroll({
        target: containerRef,
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
        if (!loaded) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set Canvas Size (Responsive)
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(Math.round(frameIndex.get()));
        };

        const renderFrame = (index: number) => {
            if (!ctx || !images[index]) return;

            const img = images[index];
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth = canvas.width;
            let drawHeight = canvas.height;
            let offsetX = 0;
            let offsetY = 0;

            // Contain Logic
            if (canvasRatio > imgRatio) {
                drawWidth = canvas.height * imgRatio;
                offsetX = (canvas.width - drawWidth) / 2;
            } else {
                drawHeight = canvas.width / imgRatio;
                offsetY = (canvas.height - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        // Initial Resize
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Subscribe to Scroll Changes
        const unsubscribe = frameIndex.on("change", (latest) => {
            requestAnimationFrame(() => renderFrame(Math.round(latest)));
        });

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            unsubscribe();
        };
    }, [loaded, frameIndex, images]);

    return (
        <div ref={containerRef} className={heightClass + " relative w-full"}>
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
                <canvas ref={canvasRef} className="block w-full h-full object-contain" />
                {children}
            </div>
        </div>
    );
};

export default ScrollSequence;
