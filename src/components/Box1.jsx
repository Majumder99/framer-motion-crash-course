import React from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  const [animate, setAnimate] = React.useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: animate ? 2000 : 0,
          opacity: animate ? 1 : 0.5,
          // backgroundColor: "blue"
          rotate: animate ? 360 : 0,
        }}
        initial={{
          opacity: 0.1,
        }}
        transition={{
          // type: "spring",
          duration: 2,
          // stiffness: 60,
          // damping: 100,
        }}
        onClick={() => setAnimate(!animate)}></motion.div>
    </div>
  );
};

export default Box1;
