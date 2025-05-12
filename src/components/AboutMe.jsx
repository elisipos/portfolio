import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const AboutMe = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const aboutMeDesc = 
  `\tI am a full-stack developer based in Wisconsin holding an Associate's in Web and Software Development. I'm most experienced with building responsive, user-friendly web applications using modern technologies across both front-end and back-end stacks. I'm passionate about clean code, intuitive design, and solving real-world problems through development.`;

  return (
    <div className="flex justify-center mt-5 w-full max-w-xl mx-auto">
      <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} flex pt-2 p-4 rounded-2xl text-xl text-center max-h-[70vh]`}>
        <div>
          <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'}`}>About Me</div>
          <div className="pre text-left text-lg block">
            {aboutMeDesc}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe