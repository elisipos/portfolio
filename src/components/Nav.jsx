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
    <div className={`${theme == "light" ? 'text-gray-200 bg-lime-500' : 'text-gray-800 bg-lime-400'} hidden sm:block`}>
      <div className={'flex justify-end p-5 lg:w-10/12'}>
        <div className='text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge' onClick={() => handleClick()} onMouseOver={() => handleMouseEnter()} onMouseOut={() => handleMouseOut()}>{text}</div>
        <div className='text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge'>blogs</div>
        <div className='text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge'>projects</div>
        <div className='text-lg md:text-xl px-2 md:px-5 hover:cursor-pointer enlarge'>contact</div>
      </div>
    </div>

    <div className={`${theme == 'light' ? 'text-gray-200 bg-lime-500' : 'text-gray-800 bg-lime-400'} block sm:hidden h-15`}>
      <div className="flex justify-end p-3.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${theme == 'light' ? 'white' : 'black'}`} class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>
    </div>

    <div className="block sm:hidden"></div>
    </>
  )
}

export default Nav