import React, { useContext, useState } from 'react'
import { AnimatePresence, motion, rgba } from 'motion/react'
import { ThemeContext } from '../ThemeContext'

const SearchListElem = (prop) => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <>
      <motion.div
      key="li"
      whileHover={ { backgroundColor: "#ded7c8" } }
      transition={ { ease: "easeIn"} }
      className={`${theme == 'light' ? 'text-black' : 'text-white'} grid grid-cols-4 justify-items-center m-2 py-2 rounded-lg`}>
      <li className="w-min col-span-1 content-center">{prop.svg}</li>
      <li className="max-w-xs col-span-3 content-center">{prop.detail}</li>
      </motion.div>
    </>
  )
}

export default SearchListElem