import React from 'react';
import { motion } from 'framer-motion';

const loaderVar = {
  anim1: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
};

export default function Loader() {
  return (
    <motion.div
      className="loader"
      variants={loaderVar}
      animate="anim1"
    ></motion.div>
  );
}
