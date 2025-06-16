import React, { useState } from 'react'
import {motion, AnimatePresence } from 'framer-motion';

const ProjectTemplate = ({ imageUrl, title, description, tooltip }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-row cursor-pointer w-full items-center"
      layout
      onClick={ () => setIsOpen(!isOpen) }
      whileHover={ { scale: 1.05 } }
      transition={ { duration: 0.1, ease: "easeInOut"} }
    >
      <motion.div layout>
        <img
          src={imageUrl}
          alt={title + "image"}
          className="w-30 h-30 mx-5"
        />
      </motion.div>

      <motion.div 
        className={`flex flex-col mr-5 flex-1 ${isOpen ? "justify-start" : "justify-center"}`}
        layout
        transition={{ duration: 0.3 }}
        >
        <motion.div 
          className={`font-bold text-2xl flex ${isOpen ? "justify-start" : "justify-center"}`}
          layout
          transition={{ duration: 0.3 }}
          >
          {title}
        </motion.div>
      {/* <motion.div className={`flex flex-1 flex-col justify-start`} layout>
        <motion.div 
          className={`font-bold text-2xl`}
          layout
          transition={{ duration: 0.3 }}
          >
          {title}
        </motion.div> */}

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="text-base overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {description}
              </motion.div>

              <motion.div
                className="text-sm italic overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {tooltip}
              </motion.div>

            </>
          )}
        </AnimatePresence>
      </motion.div>

    </motion.div>
  )
}

export default ProjectTemplate