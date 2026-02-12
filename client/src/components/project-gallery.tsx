import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

interface ProjectGalleryProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    projectTitle: string;
    images: string[];
}

export function ProjectGallery({ isOpen, onOpenChange, projectTitle, images }: ProjectGalleryProps) {
    // Prevent body scroll when dialog is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl w-[95vw] rounded-xl bg-black/90 backdrop-blur-xl border-white/10 text-white p-0 overflow-hidden">
                <div className="p-4 md:p-6 pb-2">
                    <DialogHeader>
                        <DialogTitle className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            {projectTitle}
                        </DialogTitle>
                        <DialogDescription className="text-gray-400 text-sm">
                            Project Gallery
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="relative w-full flex items-center justify-center bg-black/50 p-2 md:p-4">
                    <Carousel className="w-full max-w-3xl">
                        <CarouselContent>
                            {images.map((img, index) => (
                                <CarouselItem key={index} className="flex items-center justify-center">
                                    <div className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden rounded-lg">
                                        <img
                                            src={img}
                                            alt={`${projectTitle} screenshot ${index + 1}`}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 md:-left-12 bg-white/10 hover:bg-white/20 border-none text-white z-10" />
                        <CarouselNext className="right-2 md:-right-12 bg-white/10 hover:bg-white/20 border-none text-white z-10" />
                    </Carousel>
                </div>

                {/* Thumbnail strip could go here if needed */}
                <div className="p-4 flex gap-2 overflow-x-auto justify-center">
                    {images.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
