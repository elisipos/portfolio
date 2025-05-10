import React, { useContext, useEffect } from 'react'
import ProfileComp from './ProfileComp'
import TechStackComp from './TechStackComp'
import { ThemeContext } from '../ThemeContext'

const Main = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  let userTheme = localStorage.getItem("theme");
  useEffect(() => {
    setTheme(userTheme);
  }, [])

  return (
    <>
      <ProfileComp></ProfileComp>
      <TechStackComp></TechStackComp>
    </>
  )
}

export default Main