import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const EducationComp = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div id="education" className="flex justify-center mt-5 w-full max-w-xl mx-auto">
      <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} flex flex-col justify-center max-w-xl w-full pt-2 p-4 rounded-2xl text-xl max-h-[70vh]`}>
        <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'}`}> 
          <div className="text-center py-2">Education</div>
          <div>Western</div>
        </div>
      </div>
    </div>
  )
}

export default EducationComp