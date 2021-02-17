import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  const containerVariant = {
    init: { x: "100vw", opacity: 0 },
    anim: { x: 0, opacity: 1, transition: { type: "spring" } },
    exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
    
  };
  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px #fff",
      boxShadow: "0px 0px 8px #fff",
      transition: {
        yoyo: 4,
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      className="toppings container"
      variants={containerVariant}
      initial="init"
      animate="anim"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.2, color: "#d2a526", originX: 0 }}
              transition={{ type: "spring", stiffness: 150 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariant} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
