import React, { useContext, useEffect } from 'react'
import ProfileComp from './Profile/ProfileComp'
import TechStackComp from './TechStackComp'
import { ThemeContext } from '../ThemeContext'
import AboutMeComp from './AboutMe/AboutMeComp'
import EducationComp from './Education/EducationComp'
import ProjectsComp from './Projects/ProjectsComp'

const Main = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  
  useEffect(() => {
    let userTheme = localStorage.getItem('theme');
    if(userTheme){
      setTheme(userTheme);
    }else{
      setTheme("dark");
    }
  }, [])

  return (
    <>
      <div className="mb-100">
        <ProfileComp></ProfileComp>
        <AboutMeComp></AboutMeComp>
        <TechStackComp></TechStackComp>
        <EducationComp></EducationComp>
        <ProjectsComp></ProjectsComp>
      </div>
    </>
  )
}

export default Main