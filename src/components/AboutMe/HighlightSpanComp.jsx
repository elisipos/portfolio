import { AnimatePresence, motion } from 'motion/react'
import React from 'react'

const HighlightSpanComp = ({ children, highlight }) => {

  const HIGHLIGHT_TRANSITION_BOX_SHADOW_VISIBLE = "0 0 0 2.4px rgba(124, 207, 0, 0.7)";
  const HIGHLIGHT_TRANSITION_BOX_SHADOW = "0 0 0 2.4px rgba(124, 207, 0, 0)";
  const HIGHLIGHT_TRANSITION_BACKGROUND_COLOR_VISIBLE = "rgba(124, 207, 0, 0.7)";
  const HIGHLIGHT_TRANSITION_BACKGROUND_COLOR = "rgba(124, 207, 0, 0)";

  return (
    <motion.span
      style={ { originX: 0} }
      animate={{ 
        boxShadow: highlight ? HIGHLIGHT_TRANSITION_BOX_SHADOW_VISIBLE : HIGHLIGHT_TRANSITION_BOX_SHADOW, 
        backgroundColor: highlight ? HIGHLIGHT_TRANSITION_BACKGROUND_COLOR_VISIBLE : HIGHLIGHT_TRANSITION_BACKGROUND_COLOR }}
      transition={ { duration: 0.2 } }
      >
        {children}
    </motion.span>
  )
}

export default HighlightSpanComp