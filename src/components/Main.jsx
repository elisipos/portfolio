import React, { useContext, useEffect } from 'react'
import ProfileComp from './ProfileComp'
import TechStackComp from './TechStackComp'
import { ThemeContext } from '../ThemeContext'
import AboutMeComp from './AboutMe/AboutMeComp'
import EducationComp from './EducationComp'

const Main = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  
  useEffect(() => {
    let userTheme = localStorage.getItem('theme');
    if(userTheme){
      setTheme(userTheme);
    }else{
      setTheme("light");
    }
  }, [])

  return (
    <>
      <div className="mb-100">
        <ProfileComp></ProfileComp>
        <AboutMeComp></AboutMeComp>
        <TechStackComp></TechStackComp>
        <EducationComp></EducationComp>
      </div>
    </>
  )
}

export default Main