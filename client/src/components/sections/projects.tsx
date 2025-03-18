import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { PROJECTS_DATA } from "@/lib/constants";
import { staggerChildren } from "@/lib/animations";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/5">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                metrics={project.metrics}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
