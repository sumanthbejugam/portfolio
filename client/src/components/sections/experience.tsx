import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { EXPERIENCE_DATA } from "@/lib/constants";
import { staggerChildren, slideIn } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/5">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {EXPERIENCE_DATA.map((job, index) => (
              <motion.div key={index} variants={slideIn}>
                <Card>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>
                      {job.company} | {job.location} | {job.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
