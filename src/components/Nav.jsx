import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ThemeContext } from '../ThemeContext'

const Nav = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const [text, setText] = useState(theme + " theme");
  const [prev, setPrev] = useState(text);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleClickMobile = (id) => {
    handleClick(id);
    // setMenuOpen(!menuOpen); FIX LATER
  }

  useEffect(() => {
    let userTheme = theme;
    setText(userTheme + ' theme');
  }, [theme])

  return (
    <>
    {/* Desktop Nav */}
    <div className={`${theme == "light" ? 'text-gray-200 bg-lime-500' : 'text-gray-800 bg-lime-400'} hidden sm:block sticky top-0 z-100`}>
      <div className={'flex justify-end p-5 lg:w-10/12'}>
        <div className={`${theme === "light" ? 'enlarge-light' : 'enlarge-dark'} text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge`} onClick={() => handleThemeClick()}>{text}</div>
        <div className={`${theme === "light" ? 'enlarge-light' : 'enlarge-dark'} text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge`} onClick={() => handleClick('about-me')}>about me</div>
        <div className={`${theme === "light" ? 'enlarge-light' : 'enlarge-dark'} text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge`} onClick={() => handleClick('tech-stack')}>tech stack</div>
        <div className={`${theme === "light" ? 'enlarge-light' : 'enlarge-dark'} text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge`} onClick={() => handleClick('education')}>education</div>
        <div className={`${theme === "light" ? 'enlarge-light' : 'enlarge-dark'} text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge`} onClick={() => handleClick('projects')}>projects</div>
      </div>
    </div>

    {/* Mobile Nav Header */}
    <div className={`${theme == 'light' ? 'text-gray-200 bg-lime-500' : 'text-gray-800 bg-lime-400'} block sm:hidden h-15 sticky top-0 z-100`}>
      <div className="flex justify-end p-3.5">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" className="hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${theme == 'light' ? 'white' : 'black'}`} viewBox="0 0 16 16">
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
            <div className="hover:cursor-pointer text-xl" onClick={() => handleThemeClick()}>{text}</div>
            <div className="hover:cursor-pointer text-xl" onClick={() => handleClickMobile('about-me')}>about me</div>
            <div className="hover:cursor-pointer text-xl" onClick={() => handleClickMobile('tech-stack')}>tech stack</div>
            <div className="hover:cursor-pointer text-xl" onClick={() => handleClickMobile('education')}>education</div>
            <div className="hover:cursor-pointer text-xl" onClick={() => handleClickMobile('projects')}>projects</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export default Nav