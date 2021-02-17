import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  const containerVariant = {
    init: { x: '100vw', opacity: 0 },
    anim: { x: 0, opacity: 1, transition: { type: 'spring' } },
    exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
  };
  const nextVariant = {
    init: { x: '-100vw' },
    anim: { x: 0 },
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
      className="base container"
      variants={containerVariant}
      initial="init"
      animate="anim"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.2, color: '#d2a526', originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariant}>
          <Link to="/toppings">
            <motion.button variants={buttonVariant} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
