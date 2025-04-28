import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../ThemeContext'

const Nav = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const [text, setText] = useState(theme + " theme");
  const [prev, setPrev] = useState(text);

  const handleClick = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    setText(theme + " theme");
    setPrev(theme + " theme");
  }, [theme]);

  const handleMouseEnter = () => {
    setPrev(text);
    let toggle;
    theme == 'light' ? toggle = 'dark' : toggle = 'light';
    setText("change to " + toggle + "?");
  }

  const handleMouseOut = () => {
    setText(prev);
  }

  return (
    <>
    <div className={theme == "light" ? 'text-gray-200 bg-lime-500' : 'text-gray-800 bg-lime-400'}>
      <div className={'flex justify-end p-5 lg:w-10/12'}>
        <div className='text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge' onClick={() => handleClick()} onMouseOver={() => handleMouseEnter()} onMouseOut={() => handleMouseOut()}>{text}</div>
        <div className='text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge'>blogs</div>
        <div className='text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge'>projects</div>
        <div className='text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge'>contact</div>
      </div>
    </div>
    </>
  )
}

export default Nav