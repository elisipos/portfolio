import React, { useContext, useState } from 'react'
import { AnimatePresence, motion, rgba } from 'motion/react'
import { ThemeContext } from '../ThemeContext'

const SearchListElem = (prop) => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <>
      <motion.div
      key="li"
      whileHover={ { scale: 1.05 } }
      transition={ { duration: 0.1, ease: "easeInOut"} }
      className={`${theme == 'light' ? 'text-black' : 'text-gray-300'} grid grid-cols-4 justify-items-center m-2 py-2 rounded-lg hover:cursor-default`}>
      <li className="w-min col-span-1 content-center">{prop.svg}</li>
      <li className="max-w-xs col-span-1 content-center">{prop.id}</li>
      <li className="max-w-xs col-span-2 content-center">{prop.detail}</li>
      </motion.div>
    </>
  )
}

export default SearchListElem