import { useLocation } from "wouter";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [location] = useLocation();

  return (
    <motion.header 
      className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="text-xl font-bold">
          Sumanth Bejugam
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </nav>
    </motion.header>
  );
}
