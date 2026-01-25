import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { ExternalLink, ArrowUpRight, Trophy } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  metrics?: string;
  imageUrl?: string;
  url?: string;
}

export default function ProjectCard({ title, description, technologies, metrics, imageUrl, url }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      className="h-full group"
    >
      <a href={url} target="_blank" rel="noreferrer" className="block h-full">
        <Card className="h-full flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 rounded-md">
          {imageUrl && (
            <div className="relative w-full h-56 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <div className="bg-background/80 backdrop-blur-md p-2 rounded-full shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col flex-grow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                  {title}
                </CardTitle>
                {metrics && (
                  <div className="flex items-center gap-2 mt-2 text-sm text-yellow-500/90 font-medium">
                    <Trophy className="w-4 h-4" />
                    <span>{metrics}</span>
                  </div>
                )}
              </div>
            </div>

            <CardDescription className="text-base leading-relaxed mb-6 flex-grow">
              {description}
            </CardDescription>

            <div className="flex flex-wrap gap-2 mt-auto">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </a>
    </motion.div>
  );
}
