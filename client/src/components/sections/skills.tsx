import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SKILLS_DATA } from "@/lib/constants";
import { staggerChildren, scaleIn } from "@/lib/animations";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {SKILLS_DATA.technologies.map((tech, index) => (
              <motion.div key={tech.name} variants={scaleIn}>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <tech.icon className="h-12 w-12 mb-4" />
                    <span className="font-medium">{tech.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto">
            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            <ul className="justify-center gap-4">
              {SKILLS_DATA.certifications.map((cert, index) => (
              <motion.li
              key={index}
              variants={scaleIn}
              className="flex items-center gap-2"
              >
              <span className="h-2 w-2 rounded-full bg-primary" />
              {cert}
              </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
