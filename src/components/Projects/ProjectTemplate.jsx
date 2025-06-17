import React, { useState } from 'react'
import {motion, AnimatePresence } from 'framer-motion';
import LinkIcon from '../Icons/LinkIcon';
import InfoIcon from '../Icons/InfoIcon';

const ProjectTemplate = ({ imageUrl, link, title, description, tooltip }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-row cursor-pointer w-full items-center"
      layout
      onClick={ () => setIsOpen(!isOpen) }
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

          {
          isOpen ?
            <motion.a 
              href={link} 
              target="_blank"
              className="flex items-center ml-2 mt-1"
              whileHover={{ scale: 1.2 }}
              transition={{ ease: "easeInOut", duration: 0.1 }}
            >
              <LinkIcon />
            </motion.a>
          : 
            null
          }

        </motion.div>

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
                className="text-sm italic overflow-hidden flex"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="mt-1 mr-1.5">
                  <InfoIcon />
                </span>
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