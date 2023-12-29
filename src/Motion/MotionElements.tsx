import { motion } from "framer-motion";
import React from "react";

type MotionProps = {
    children?: React.ReactNode;
    className?: string;
}

const TransitionDiv: React.FC<MotionProps> = ({children}, className = '') => {
  return (
    <motion.div
      className={`transition-div ${className}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export { TransitionDiv }