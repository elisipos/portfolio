import React, { useContext } from 'react'
import profileImg from '../../assets/profile-img-crop.jpg';
import { ThemeContext } from '../../ThemeContext';
import WaveHoverWrapper from './WaveHoverWrapper';
import { motion } from "framer-motion"
import GitHubIcon from '../Icons/GitHubIcon';
import ScaleHoverWrapper from './ScaleHoverWrapper';

const ProfileComp = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <div className="flex justify-center mt-5">
      <div className={`${theme == 'light' ? 'bg-black/5': 'bg-white/10'} flex p-4 rounded-2xl max-w-xl w-full`}>
        <div className="flex items-center">
          <div className={`${theme == 'light' ? 'border-black' : 'border-white/80'} w-30 h-30 rounded-full overflow-hidden border-2`}>
            <img src={profileImg} alt="Picture of Eli Sipos"/>
          </div>
        </div>
        
        <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'} flex items-center lg:items-start mt-5 flex-grow`}>
          <div className="ml-2 md:ml-5">
            <div className="text-3xl w-full">
              <WaveHoverWrapper className="inline-block cursor-default">👋</WaveHoverWrapper>, I'm <span className="font-semibold">Eli Sipos</span>.
            </div>
            <div className="text-lg w-full">Full Stack Developer</div>
            <div className="text-lg w-full">Wisconsin, USA</div>
            <div className="ml-5">
              <div className="text-lg w-full">Available for work</div>
              
              <span className="absolute animate-ping -mx-4 -mt-4.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill={`${theme == 'light' ? 'green' : 'lime'}`} viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              </span>
              <span className="absolute -mx-4 -mt-4.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill={`${theme == 'light' ? 'green' : 'lime'}`} viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              </span>

            </div>

          </div>
        </div>
        
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          <ScaleHoverWrapper
            className="flex items-center justify-center"
            onClick={() => openInNewTab('https://github.com/elisipos?tab=repositories')}
          >
            <GitHubIcon />
          </ScaleHoverWrapper>
          <div className="flex items-center justify-center">Item</div>
          <div className="flex items-center justify-center">Item</div>
          <div className="flex items-center justify-center">Item</div>
        </div>

      </div>
    </div>
  )
}

export default ProfileComp