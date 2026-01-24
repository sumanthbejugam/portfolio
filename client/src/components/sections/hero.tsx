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
              className="text-xl md:text-2xl text-muted-foreground mb-8 relative overflow-hidden"
              variants={slideIn}
            >
              {RESUME_DATA.summary.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block relative"
                  initial={{ backgroundSize: "0% 2px" }}
                  animate={{ backgroundSize: "100% 2px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundImage: "linear-gradient(to right, currentColor, currentColor)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 100%",
                    backgroundSize: index === RESUME_DATA.summary.split(" ").length - 1 ? "100% 2px" : "0% 2px",
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
          >
            <Button size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            
            <Button size="lg" variant="outline" onClick={() => window.open(RESUME_DATA.resume, "_blank")}>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
