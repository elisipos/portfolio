import React, { useContext } from 'react'
import profileImg from '../assets/profile-img-crop.jpg';
import { ThemeContext } from '../ThemeContext';

const ProfileComp = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className="flex justify-center my-10">

      <div className={`${theme == 'light' ? 'bg-black/5': 'bg-white/10'} w-4/5 lg:w-1/2 flex p-5 rounded-2xl`}>
      
        <div>
          <div className={`${theme == 'light' ? 'border-black' : 'border-white'} lg:w-20 lg:h-20 w-50 h-50 rounded-full overflow-hidden border-2`}>
            <img src={profileImg} alt="Picture of Eli Sipos"/>
          </div>
        </div>
        
        <div className={`${theme == 'light' ? 'text-black' : 'text-white'} max-w-sm mx-4 flex items-center mt-5`}>
          <div>
            <div className="text-5xl lg:text-3xl flex">Hi, I'm Eli Sipos.</div>

            <div className="flex items-center text-lg">
              <span className="absolute animate-ping mx-1 mr-1.5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill={`${theme == 'light' ? 'green' : 'lime'}`} class="bi bi-circle-fill" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              </span>
              <span className="relative mx-1 mr-1.5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill={`${theme == 'light' ? 'green' : 'lime'}`} class="bi bi-circle-fill" viewBox="0 0 16 16">
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