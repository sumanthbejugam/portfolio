// Utility to generate image paths for the clips
// Assumes images are in /assets/Clip X/ezgif-frame-YYY.jpg

const generatePaths = (clipFolder: string, count: number) => {
    return Array.from({ length: count }, (_, i) => {
        // Format index to 5 digits (00001, 00002, etc.)
        const frameNum = (i + 1).toString().padStart(5, "0");
        return `/assets/${clipFolder}/frame_${frameNum}.webp`;
    });
};

// Clip 1: Web Development (90 frames)
export const webDevFrames = generatePaths("Clip 1", 90);

// Clip 2: Mobile App (90 frames)
export const appDevFrames = generatePaths("Clip 2", 90);

// Clip 3: AI Development (90 frames)
export const aiDevFrames = generatePaths("Clip 3", 90);

// Clip 4: Embedded/IoT (90 frames)
export const embeddedDevFrames = generatePaths("Clip 4", 90);

export const allFrames = [
    ...webDevFrames,
    ...appDevFrames,
    ...aiDevFrames,
    ...embeddedDevFrames,
];
