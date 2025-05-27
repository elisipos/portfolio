import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

const SearchListHeader = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className={`${
      theme == 'light' ? 'text-black/60' : 'text-white/60'
    } grid grid-cols-2 justify-items-center rounded-lg text-base list-none `}>
      <li className="col-start-2 md:col-span-1 md:col-start-2 content-center max-w-xs">Name</li>
    </div>
  )
}

export default SearchListHeader