import React, { useContext, useState } from 'react'
import { AnimatePresence, motion, rgba } from 'motion/react'
import { ThemeContext } from '../../ThemeContext'

const SearchListElem = (prop) => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <>
      <motion.div
        key="li"
        whileHover={ { scale: 1.05 } }
        transition={ { duration: 0.1, ease: "easeInOut"} }
        className={`${
          theme == 'light' ? 'text-black' : 'text-gray-300'
        } grid grid-cols-2 md:grid-cols-4 justify-items-center m-2 py-2 rounded-lg md:hover:cursor-default select-none`}>
        <li className="w-min md:col-span-2 col-span-1 content-center">{prop.svg}</li>
        <li className="max-w-xs md:col-span-2 col-span-1 content-center">{prop.id}</li>
      </motion.div>
    </>
  )
}

export default SearchListElem