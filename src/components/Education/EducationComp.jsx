import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
import WesternPic from '../../assets/western-technical-college-img.jpg';

const EducationComp = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div id="education" className="flex justify-center mt-5 w-full max-w-xl mx-auto">
      <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} flex flex-col justify-center max-w-xl w-full pt-2 p-4 rounded-2xl text-xl max-h-[70vh]`}>
        <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'}`}> 

          <div className="text-center text-xl font-semibold py-2">Education</div>

          <div className="flex flex-row items-center justify-center">

            <div className="relative max-w-lg w-full h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${WesternPic})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-2 left-4 z-10 text-white/80">
                <div className="text-xl font-semibold">Western Technical College</div>
                <div className="text-base">Associate's of Science in Web and Software Development</div>
                <div className="text-sm">2023 - 2025</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationComp