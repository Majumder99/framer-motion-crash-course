import React from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{
          scale: 1.2,
        }}
        
        whileTap={{
            scale: 0.8,
        }}
        // drag="x"
        // drag="y"
        drag
        dragConstraints={{
            top: -50,
            left: -50,
        }}
        ></motion.div>
    </div>
  );
};

export default Box2;
