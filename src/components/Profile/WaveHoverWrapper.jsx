import React from 'react'
import { motion } from "framer-motion"

const WaveHoverWrapper = ({ children, className = '' }) => {

  const waveHoverProps = {
    whileHover: {
      rotate: [0, 15, -10, 15, -5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div className={className} {...waveHoverProps}>
      {children}
    </motion.div>
  )
}

export default WaveHoverWrapper