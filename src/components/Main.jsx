import React, { useContext, useEffect } from 'react'
import ProfileComp from './ProfileComp'
import TechStackComp from './TechStackComp'
import { ThemeContext } from '../ThemeContext'
import AboutMe from './AboutMe'

const Main = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  
  useEffect(() => {
    setTheme("light");
  }, [])

  return (
    <>
      <ProfileComp></ProfileComp>
      <AboutMe></AboutMe>
      <TechStackComp></TechStackComp>
    </>
  )
}

export default Main