import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const SearchBarComp = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <input className={`${theme == 'light' ? 'border-black' : 'border-white'} border-1 rounded-lg w-lg p-1 mt-2`}/>
  )
}

export default SearchBarComp