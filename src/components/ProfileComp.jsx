import React from 'react'
import profileImg from '../assets/profile-img-crop.jpg';

const ProfileComp = () => {
  return (
    <div className="flex justify-center my-10">

      <div className="w-1/3 flex p-2 bg-black/5 rounded-2xl">
      
        <div>
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
            <img src={profileImg} alt="Picture of Eli Sipos" width="80" height="80"/>
          </div>
        </div>
        
        <div className="max-w-sm mx-4 flex items-center mt-5">
          <div>
            <div className="text-3xl">Hi, I'm Eli Sipos.</div>

            <div className="flex items-center -m-0.5">
              <span className="absolute animate-ping mx-1 mr-1.5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="green" class="bi bi-circle-fill" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              </span>
              <span className="relative mx-1 mr-1.5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="green" class="bi bi-circle-fill" viewBox="0 0 16 16">
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