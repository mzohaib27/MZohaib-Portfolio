import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Animate = ({ children, xpos = 0, ypos = 0, delay }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: xpos, y: ypos, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animate;
