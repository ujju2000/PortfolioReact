import { forwardRef } from "react";
import { motion } from "motion/react";

export const MotionDiv = forwardRef(
  (
    {
      children,
      duration = 0.5,
      delay = 0,
      initial = { opacity: 1, y: 20 },
      viewPort = { once: true, margin: "-100px" },
      whileInView = { opacity: 1, y: 0 },
      transition = { duration, delay },
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={initial}
        whileInView={whileInView}
        viewport={viewPort}
        transition={transition}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

MotionDiv.displayName = "MotionDiv";
