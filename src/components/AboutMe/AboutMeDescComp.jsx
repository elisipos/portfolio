import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ThemeContext } from '../../ThemeContext'
import HighlightSpanComp from './HighlightSpanComp';

const AboutMeDescComp = ( {highlight} ) => {

  return (
    <div className="pre text-left text-lg block">
            {`\tI am a `}
            <HighlightSpanComp highlight={highlight}>full-stack developer</HighlightSpanComp>
            {` based in Wisconsin holding an Associate's in `}
            <HighlightSpanComp highlight={highlight}>Web and Software Development.</HighlightSpanComp>
            {` I'm most experienced with building `}
            <HighlightSpanComp highlight={highlight}>responsive, user-friendly</HighlightSpanComp>
            {` web applications using modern technologies across both front-end and back-end stacks. I practice writing clean code, implementing intuitive design, and solving real-world problems through development.`}
    </div>
  )
}

export default AboutMeDescComp