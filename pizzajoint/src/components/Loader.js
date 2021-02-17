import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVar = {
  anim1: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: 'easeOut' },
    },
  },
  anim2: {
    y: [0, -40],
    x: 0,
    transition: {
      y: { yoyo: Infinity, duration: 0.25, ease: 'easeOut' },
    },
  },
};

export default function Loader() {
  const [animation, cycleAnimation] = useCycle('anim1', 'anim2');

  return (
    <>
      <motion.div className="loader" variants={loaderVar} animate={animation} />
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
}
