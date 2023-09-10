import React from "react";
import { motion } from "framer-motion";

const Box3 = () => {
  const boxVariants = {
    lion: {
      x: 100,
      scale: 1.5,
    },
    elephant: {
      x: 1000,
      scale: 0.3,
    },
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const listVariants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.2,

      //   transition: {
      //     delay: 1,
      //   },
    },
  };

  return (
    <>
      <div className="box-container">
        <motion.div
          className="box"
          variants={boxVariants}
          animate="visible"
          initial="hidden"
          //   transition={{
          //     type: "tween",
          //     duration: 2,
          //   }}
        >
          {[1, 2, 3].map((box, i) => (
            <motion.li
              key={i}
              className="boxItem"
              variants={listVariants}
              animate="visible"
              initial="hidden"></motion.li>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Box3;
