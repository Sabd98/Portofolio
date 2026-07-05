import { motion, useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";

interface FadeInSectionProps {
    children: ReactNode;
  }
  
  export const FadeInSectionRight: React.FC<FadeInSectionProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  
    return (
      <div ref={ref} className="w-full overflow-hidden"> 
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          {children}
        </motion.div>
      </div>
    );
  };