import { motion, MotionProps, AnimatePresence } from "framer-motion";
import React from "react";

interface MotionElementProps extends MotionProps {
  className?: string;
}

const TransitionDiv: React.FC<MotionElementProps> = ({ children, className = '', ...rest }) => {
  return (
    <motion.div
      className={`transition-div ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

const FromLeftDiv: React.FC<MotionElementProps> = ({ children, className = '', ...rest }) => {
  return (
      <motion.div
        className={`transition-div ${className}`}
        initial={{ opacity: 0, x: 100 }}
        {...rest}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100, transition: { duration: 0.4 }}}
      >
        {children}
      </motion.div>
  );
}

const FromRightDiv: React.FC<MotionElementProps> = ({ children, className = '', ...rest }) => {
  return (
    <motion.div
      className={`transition-div ${className}`}
      initial={{ opacity: 0, x: -100 }}
      {...rest}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.4 }}}
    >
      {children}
    </motion.div>
  );
}

const FromTopDiv: React.FC<MotionElementProps> = ({ children, className = '', ...rest }) => {
  return (
    <motion.div
      className={`transition-div ${className}`}
      initial={{ opacity: 0, y: -100 }}
      {...rest}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.4 } }}
    >
      {children}
    </motion.div>
  );
}

const FromBottomDiv: React.FC<MotionElementProps> = ({ children, className = '', ...rest }) => {
  return (
    <motion.div
      className={`transition-div ${className}`}
      initial={{ opacity: 0, y: 100 }}
      {...rest}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100, transition: { duration: 0.4 }}}
    >
      {children}
    </motion.div>
  );
}

export { TransitionDiv, FromLeftDiv, FromRightDiv, FromTopDiv, FromBottomDiv }