import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const TechStackComp = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className="flex justify-center my-10">
      <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} w-4/5 lg:w-1/2 flex p-5 rounded-2xl`}>
        Tech stack
      </div>
    </div>
  )
}

export default TechStackComp