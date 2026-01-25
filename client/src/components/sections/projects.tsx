import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { PROJECTS_DATA } from "@/lib/constants";
import { staggerChildren } from "@/lib/animations";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-secondary/5">
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-50" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground inline-block">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of technical expertise across full-stack development and mobile solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                metrics={project.metrics}
                imageUrl={project.image}
                url={project.url}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
