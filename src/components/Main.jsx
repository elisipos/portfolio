import React, { useContext, useEffect } from 'react'
import ProfileComp from './ProfileComp'
import TechStackComp from './TechStackComp'
import { ThemeContext } from '../ThemeContext'
import AboutMeComp from './AboutMe/AboutMeComp'

const Main = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  
  useEffect(() => {
    setTheme("light");
  }, [])

  return (
    <>
      <ProfileComp></ProfileComp>
      <AboutMeComp></AboutMeComp>
      <TechStackComp></TechStackComp>
    </>
  )
}

export default Main