import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ThemeContext } from '../ThemeContext'
import HighlightSpanComp from './HighlightSpanComp';

const AboutMe = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const [highlight, setHighlight] = useState(false);

  return (
    <div 
    onClick={()=>{setHighlight(!highlight)}}
    className="flex justify-center mt-5 w-full max-w-xl mx-auto">
      <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} flex pt-2 p-4 rounded-2xl text-xl text-center max-h-[70vh]`}>
        <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'}`}>
          <div className="my-1">About Me</div>
          <div className="pre text-left text-lg block">
            {`\tI am a `}
            <HighlightSpanComp highlight={highlight}>full-stack developer</HighlightSpanComp>
            {` based in Wisconsin holding an Associate's in `}
            <HighlightSpanComp highlight={highlight}>Web and Software Development.</HighlightSpanComp>
            {` I'm most experienced with building `}
            <HighlightSpanComp highlight={highlight}>responsive, user-friendly</HighlightSpanComp>
            {` web applications using modern technologies across both front-end and back-end stacks. I practice writing clean code, implementing intuitive design, and solving real-world problems through development.`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe