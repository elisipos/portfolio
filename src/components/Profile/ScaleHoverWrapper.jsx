import React from 'react'
import { motion } from "framer-motion"

const ScaleHoverWrapper = ({ children, className = '', onClick }) => {

  const scaleHoverProps = {
    whileHover: {
      scale: 1.2,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={'hover:cursor-pointer ' + className}
      onClick={onClick}
      {...scaleHoverProps}
    >
      {children}
    </motion.div>
  )
}

export default ScaleHoverWrapper