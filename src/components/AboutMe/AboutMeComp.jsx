import React from 'react'
import AboutMeScreenLogicComp from './AboutMeScreenLogicComp'
import AboutMeDescComp from './AboutMeDescComp'

const AboutMeComp = () => {
  return (
    <>
      <AboutMeScreenLogicComp>
        {({ highlight }) => <AboutMeDescComp highlight={highlight}></AboutMeDescComp>}
      </AboutMeScreenLogicComp>
    </>
  )
}

export default AboutMeComp