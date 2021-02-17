import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariant = {
    init: { opacity: 0 },
    anim: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
    exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
  };
  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px #fff',
      boxShadow: '0px 0px 8px #fff',
      transition: {
        yoyo: 4,
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariant}
      initial="init"
      animate="anim"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
