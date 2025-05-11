import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../ThemeContext'

const SearchBarComp = ({ sendParentData }) => {

  const {theme, setTheme} = useContext(ThemeContext);

  const handleOnChange = (change) => {
    sendParentData(change);
  }



  return (
    <input
      onChange={(evt) => handleOnChange(evt.target.value)}
      placeholder='Search languages, frameworks, libraries, etc...'
      className={`${
        theme == 'light' ? 'border-black placeholder-black/50 text-black' : 'border-gray-400 placeholder-white/50 text-white/80'
      } focus:outline-1 border-1 rounded-lg w-xs lg:w-lg p-2 lg:text-lg text-sm m-2`}/>
  )
}

export default SearchBarComp