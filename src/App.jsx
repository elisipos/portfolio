import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { ThemeContext } from './ThemeContext'
import Main from './components/Main';

function App() {

  const [theme, setTheme] = useState('dark');

  const style = document.documentElement.style;

  theme == 'light' ? style.background = '#F5EEDD' : style.background = '#06202B';

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Nav></Nav>
        <Main></Main>
      </ThemeContext.Provider>
    </>
  )
}

export default App
