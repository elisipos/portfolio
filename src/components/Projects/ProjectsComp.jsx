import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
import flickFeedImg from '../../assets/flick-feed.png'
import ProjectTemplate from './ProjectTemplate';

const Projects = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div id="projects" className="flex justify-center mt-5 w-full max-w-xl mx-auto">
      <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} flex flex-col justify-center max-w-xl w-full pt-2 p-4 rounded-2xl text-xl max-h-[70vh]`}>
        <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'}`}>
          
          <div className='text-center text-xl font-semibold py-2'>Projects</div>

          <div className="flex flex-col items-start">

            <ProjectTemplate
            imageUrl={flickFeedImg}
            link="https://animated-sunshine-e1d49b.netlify.app"
            title="Flick Feed"
            description="Flick Feed is a web app that pulls data from a 3rd party API, The Movie Database, to display a variety of movies and shows to the user, which the user can bookmark shows to watch later."
            tooltip="Free back-end server hosting causes a delay upon first request."
            ></ProjectTemplate>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects