import React, { useContext, useState } from 'react'
import { AnimatePresence, motion, rgba } from 'motion/react'
import { ThemeContext } from '../../ThemeContext'

const SearchListElem = (prop) => {

  const {theme, setTheme} = useContext(ThemeContext);
  const [open, setOpen] = useState();

  return (
    <>
      <motion.div
        key="li"
        whileHover={ { scale: 1.05 } }
        transition={ { duration: 0.1, ease: "easeInOut"} }
        onClick={() => setOpen(!open)}
        className={`${
          theme == 'light' ? 'text-black' : 'text-gray-300'
        } grid grid-cols-2 md:grid-cols-4 justify-items-center m-2 py-2 rounded-lg md:hover:cursor-default hover:cursor-pointer select-none`}>
        <li className="w-min col-span-1 content-center">{prop.svg}</li>
        <li className="max-w-xs col-span-1 content-center">{prop.id}</li>
        <li className="max-w-xs hidden md:block md:col-span-2 content-center">{prop.detail}</li>
        <AnimatePresence>
          {open && (<motion.div
            key="details"
            initial={ { height: 0, opacity: 0 } }
            animate={ { height: 'auto', opacity: 1} }
            exit={ { height: 0, opacity: 0 } }
            transition={ { duration: 0.2, ease: "easeInOut" } }
            className="col-span-2 origin-top md:hidden block">
            {prop.detail}
          </motion.div>)}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default SearchListElem