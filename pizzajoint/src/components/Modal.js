import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
  init: { opacity: 0 },
  anim: { opacity: 1 },
};

const modal = {
  init: {
    opacity: 0,
    y: '-100vh',
  },
  anim: {
    opacity: 1,
    y: '200px',
    transition: { delay: 0.5 }
  }
}

export default function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="init"
          animate="anim"
          exit="init"
        >
          <motion.div className="modal" variants={modal}>
            <p>Yo bruh, wanna make another pizza?</p>
            <Link to="/" >
              <button>Restart</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
