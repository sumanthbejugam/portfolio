import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  metrics?: string;
  imageUrl?: string;
}

export default function ProjectCard({ title, description, technologies, metrics, imageUrl }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        {imageUrl && (
          <div className="w-full h-48 relative">
            <img 
              src={imageUrl} 
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          
          {metrics && (
            <p className="text-sm text-muted-foreground">
              {metrics}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
