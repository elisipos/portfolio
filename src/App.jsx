import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { ThemeContext } from './ThemeContext'

function App() {

  const [theme, setTheme] = useState('light');

  const style = document.documentElement.style;

  theme == 'light' ? style.background = '#F5EEDD' : style.background = '#06202B';

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Nav></Nav>
      </ThemeContext.Provider>
    </>
  )
}

export default App
