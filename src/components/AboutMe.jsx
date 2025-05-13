import React, { useContext, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ThemeContext } from '../ThemeContext'

const AboutMe = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const [highlight, setHighlight] = useState(false);

  const HIGHLIGHT_TRANSITION_BOX_SHADOW_VISIBLE = "0 0 0 2.4px rgba(124, 207, 0, 0.7)";
  const HIGHLIGHT_TRANSITION_BOX_SHADOW = "0 0 0 2.4px rgba(124, 207, 0, 0)";
  const HIGHLIGHT_TRANSITION_BACKGROUND_COLOR_VISIBLE = "rgba(124, 207, 0, 0.7)";
  const HIGHLIGHT_TRANSITION_BACKGROUND_COLOR = "rgba(124, 207, 0, 0)";

  return (
    <div 
    onClick={()=>{setHighlight(!highlight)}}
    className="flex justify-center mt-5 w-full max-w-xl mx-auto">
      <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} flex pt-2 p-4 rounded-2xl text-xl text-center max-h-[70vh]`}>
        <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'}`}>
          <div className="my-1">About Me</div>
          <div className="pre text-left text-lg block">
            {`\tI am a `}
            <motion.span
            key="highlight-1"
            style={ { originX: 0} }
            animate={{ 
              boxShadow: highlight ? HIGHLIGHT_TRANSITION_BOX_SHADOW_VISIBLE : HIGHLIGHT_TRANSITION_BOX_SHADOW, 
              backgroundColor: highlight ? HIGHLIGHT_TRANSITION_BACKGROUND_COLOR_VISIBLE : HIGHLIGHT_TRANSITION_BACKGROUND_COLOR }}
            transition={ { duration: 0.2 } }>full-stack developer</motion.span>
            {` based in Wisconsin holding an Associate's in `}
            <motion.span
            key="highlight-2"
            style={ { originX: 0} }
            animate={{ 
              boxShadow: highlight ? HIGHLIGHT_TRANSITION_BOX_SHADOW_VISIBLE : HIGHLIGHT_TRANSITION_BOX_SHADOW, 
              backgroundColor: highlight ? HIGHLIGHT_TRANSITION_BACKGROUND_COLOR_VISIBLE : HIGHLIGHT_TRANSITION_BACKGROUND_COLOR }}
            transition={ { duration: 0.2 } }>Web and Software Development.</motion.span>
            {` I'm most experienced with building `}
            <motion.span
            key="highlight-3"
            style={ { originX: 0} }
            animate={{ 
              boxShadow: highlight ? HIGHLIGHT_TRANSITION_BOX_SHADOW_VISIBLE : HIGHLIGHT_TRANSITION_BOX_SHADOW, 
              backgroundColor: highlight ? HIGHLIGHT_TRANSITION_BACKGROUND_COLOR_VISIBLE : HIGHLIGHT_TRANSITION_BACKGROUND_COLOR }}
            transition={ { duration: 0.2 } }>responsive, user-friendly</motion.span>
            {` web applications using modern technologies across both front-end and back-end stacks. I practice writing clean code, implementing intuitive design, and solving real-world problems through development.`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe