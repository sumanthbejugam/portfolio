import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/lib/constants";
import { fadeIn, slideIn } from "@/lib/animations";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 py-16 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={slideIn}
          >
            Hi, I'm {RESUME_DATA.name}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            variants={slideIn}
          >
            {RESUME_DATA.summary}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
          >
            <Button size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
