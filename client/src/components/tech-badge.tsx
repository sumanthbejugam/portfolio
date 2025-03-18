import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
  delay?: number;
}

export default function TechBadge({ name, icon, delay = 0 }: TechBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <Badge variant="secondary" className="text-sm py-1 px-2">
        {icon && <span className="mr-1">{icon}</span>}
        {name}
      </Badge>
    </motion.div>
  );
}
