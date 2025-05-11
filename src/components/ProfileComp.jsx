import React, { useContext } from 'react'
import profileImg from '../assets/profile-img-crop.jpg';
import { ThemeContext } from '../ThemeContext';

const ProfileComp = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className="flex justify-center mt-5">

      <div className={`${theme == 'light' ? 'bg-black/5': 'bg-white/10'} flex p-5 rounded-2xl`}>
      
        <div className="flex items-center">
          <div className={`${theme == 'light' ? 'border-black' : 'border-white/80'} lg:w-25 lg:h-25 w-30 h-30 rounded-full overflow-hidden border-2`}>
            <img src={profileImg} alt="Picture of Eli Sipos"/>
          </div>
        </div>
        
        <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'} flex items-center mt-5`}>
          <div>
            <div className="text-3xl mx-1 lg:mx-5 flex">Hi, I'm Eli Sipos.</div>

            <div className="flex items-center mx-5 text-lg">
              <span className="absolute animate-ping mx-1 mr-1.5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill={`${theme == 'light' ? 'green' : 'lime'}`} className="bi bi-circle-fill" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              </span>
              <span className="relative mx-1 mr-1.5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill={`${theme == 'light' ? 'green' : 'lime'}`} className="bi bi-circle-fill" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              </span>
              <div>Available for work</div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default ProfileComp