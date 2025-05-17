import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../ThemeContext';

const AboutMeScreenLogicComp = ( {children} ) => {

    const {theme, setTheme} = useContext(ThemeContext);
    const [highlight, setHighlight] = useState(false);

  return (
    <>
      {/* Large Screen, Click and Hold Component */}
      <div
      id="about-me"
      onMouseDown={()=>{setHighlight(!highlight)}}
      onMouseUp={()=>{setHighlight(!highlight)}}
      className="hidden lg:flex justify-center mt-5 w-full max-w-xl mx-auto">
        <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} flex pt-2 p-4 rounded-2xl text-xl text-center max-h-[70vh]`}>
          <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'}`}>
            <div className="relative my-1 flex justify-center items-center mx-auto max-w-full">
              <span>About Me</span>
              <svg className="absolute right-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                {highlight === true ? 
                <path fill={`${theme === 'light' ? 'black' : 'white'}`} fillOpacity={`${theme === 'light' ? '1' : '0.8'}`} d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0"/>
                :
                <path fill={`${theme === 'light' ? 'black' : 'white'}`} fillOpacity={`${theme === 'light' ? '1' : '0.8'}`} d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                }
              </svg>
            </div>
            {children({ highlight })}
          </div>
        </div>
      </div>

      {/* Smaller Screen, Tap Component */}
      <div
      id="about-me"
      onClick={()=>{setHighlight(!highlight)}}
      className="flex lg:hidden justify-center mt-5 w-full max-w-xl mx-auto">
        <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} flex pt-2 p-4 rounded-2xl text-xl text-center max-h-[70vh]`}>
          <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'}`}>
            <div className="relative my-1 flex justify-center items-center mx-auto max-w-full">
              <span>About Me</span>
              <svg className="absolute right-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                {highlight === true ? 
                <path fill={`${theme === 'light' ? 'black' : 'white'}`} fillOpacity={`${theme === 'light' ? '1' : '0.8'}`} d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0"/>
                :
                <path fill={`${theme === 'light' ? 'black' : 'white'}`} fillOpacity={`${theme === 'light' ? '1' : '0.8'}`} d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                }
              </svg>
            </div>
            {children({ highlight })}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMeScreenLogicComp