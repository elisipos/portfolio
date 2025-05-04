import React, { useContext, useState } from 'react'
import { ThemeContext } from '../ThemeContext'
import SearchBarComp from './SearchBarComp';
import SearchListElem from './SearchListElem';
import { AnimatePresence, motion } from 'motion/react'
import SearchList from './SearchList';

const TechStackComp = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const [inputFromSearch, setInputFromSearch] = useState('');

  const handleSearchInput = (data) => {
    setInputFromSearch(data)
  }

  return (
    <div className="flex justify-center mt-5 w-4/5 lg:w-1/2 mx-auto">
      <div className={`${theme == 'light' ? 'bg-black/5' : 'bg-white/10'} flex pt-2 p-5 rounded-2xl text-xl text-center`}>
        <div>
          <div className={`${theme == 'light' ? 'text-black' : 'text-gray-300'}`}>Tech Stack</div>
          <SearchBarComp sendParentData={handleSearchInput}></SearchBarComp>
          <ul className="grid grid-cols-1">
            <AnimatePresence>
              <SearchList input={inputFromSearch} className=""></SearchList>
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TechStackComp