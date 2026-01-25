import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { RESUME_DATA } from "@/lib/constants"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeDialogProps {
    children: React.ReactNode
}

export function ResumeDialog({ children }: ResumeDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[85vh] w-[90vw] p-0 overflow-hidden flex flex-col bg-background/95 backdrop-blur-sm">
                <DialogHeader className="px-4 py-2 border-b flex flex-row items-center justify-between shrink-0">
                    <DialogTitle className="mt-2">Resume</DialogTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-12 top-2"
                        onClick={() => window.open(RESUME_DATA.resume, "_blank")}
                        title="Open in new tab"
                    >
                        <ExternalLink className="h-4 w-4" />
                    </Button>
                </DialogHeader>
                <div className="flex-1 w-full h-full bg-white">
                    <iframe
                        src={RESUME_DATA.resume}
                        className="w-full h-full border-none"
                        title="Resume"
                        allow="autoplay"
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}
