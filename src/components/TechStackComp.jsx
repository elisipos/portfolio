import React, { useContext, useState } from 'react'
import { ThemeContext } from '../ThemeContext'
import SearchBarComp from './Search/SearchBarComp';
import SearchList from './Search/SearchList';
import SearchListHeader from './Search/SearchListHeader';

const TechStackComp = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const [inputFromSearch, setInputFromSearch] = useState('');

  const handleSearchInput = (data) => {
    setInputFromSearch(data)
  }

  return (
    <div className="flex justify-center mt-5 w-full max-w-xl mx-auto">
      <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} flex-1 pt-2 p-4 rounded-2xl text-xl text-center max-h-[70vh] sm:max-h-[100vh]`}>
        <div>
          <div className={`${theme == 'light' ? 'text-black' : 'text-white/80'}`}>Tech Stack</div>
          <SearchBarComp sendParentData={handleSearchInput}></SearchBarComp>

          <SearchListHeader></SearchListHeader>
          <ul className={`${theme == 'light' ? 'custom-scrollbar-light' : 'custom-scrollbar-dark'} grid grid-cols-1 max-h-[50vh] md:max-h-[65vh] overflow-y-scroll overflow-x-hidden`}>
            <SearchList input={inputFromSearch}></SearchList>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default TechStackComp