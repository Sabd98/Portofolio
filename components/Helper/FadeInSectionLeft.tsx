import { motion, useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";

interface FadeInSectionProps {
    children: ReactNode;
  }
  
  export const FadeInSectionLeft: React.FC<FadeInSectionProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  
    return (
      <div ref={ref} className="w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    );
  };