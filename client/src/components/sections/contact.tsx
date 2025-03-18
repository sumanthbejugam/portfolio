import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RESUME_DATA } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a href={`mailto:${RESUME_DATA.email}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <Mail className="h-6 w-6" />
                  <span className="text-sm">{RESUME_DATA.email}</span>
                </CardContent>
              </Card>
            </a>
            
            <a href={`tel:${RESUME_DATA.phone}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <Phone className="h-6 w-6" />
                  <span className="text-sm">{RESUME_DATA.phone}</span>
                </CardContent>
              </Card>
            </a>
            
            <a href={`https://${RESUME_DATA.linkedin}`} className="md:col-span-2">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <Linkedin className="h-6 w-6" />
                  <span className="text-sm">{RESUME_DATA.linkedin}</span>
                </CardContent>
              </Card>
            </a>
          </div>

          <form className="space-y-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="min-h-[150px]" />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
