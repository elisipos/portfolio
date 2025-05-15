import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ThemeContext } from '../ThemeContext'

const Nav = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const [text, setText] = useState(theme + " theme");
  const [prev, setPrev] = useState(text);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    setText(newTheme + ' theme');
  }

  return (
    <>
    {/* Desktop Nav */}
    <div className={`${theme == "light" ? 'text-gray-200 bg-lime-500' : 'text-gray-800 bg-lime-400'} hidden sm:block`}>
      <div className={'flex justify-end p-5 lg:w-10/12'}>
        <div className={`${theme === "light" ? 'enlarge-light' : 'enlarge-dark'} text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge`} onClick={() => handleClick()}>{text}</div>
        <div className={`${theme === "light" ? 'enlarge-light' : 'enlarge-dark'} text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge`}>education</div>
        <div className={`${theme === "light" ? 'enlarge-light' : 'enlarge-dark'} text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge`}>projects</div>
        <div className={`${theme === "light" ? 'enlarge-light' : 'enlarge-dark'} text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge`}>contact</div>
      </div>
    </div>

    {/* Mobile Nav Header */}
    <div className={`${theme == 'light' ? 'text-gray-200 bg-lime-500' : 'text-gray-800 bg-lime-400'} block sm:hidden h-15`}>
      <div className="flex justify-end p-3.5">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" className="hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${theme == 'light' ? 'white' : 'black'}`} className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>
      </div>
    </div>

    {/* Dropdown Menu */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          key="dropdown"
          initial={ { height: 0, opacity: 0 } }
          animate={ { height: 'auto', opacity: 1 } }
          exit={ { height: 0, opacity: 0} }
          transition={ { duration: 0.3, ease: "easeInOut" } }
          className={`${theme == 'light' ? 'text-gray-200 bg-lime-500' : 'text-gray-800 bg-lime-400'} origin-top`}>
          <div className="flex flex-col items-end px-5 pb-4 space-y-3">
            <div className="hover:cursor-pointer text-xl" onClick={() => handleClick()}>{text}</div>
            <div className="hover:cursor-pointer text-xl">education</div>
            <div className="hover:cursor-pointer text-xl">projects</div>
            <div className="hover:cursor-pointer text-xl">contact</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export default Nav