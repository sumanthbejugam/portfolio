import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin-slow opacity-80" />
            <span className="text-sm font-light tracking-[0.2em] uppercase opacity-60">
              Initializing Experience
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
