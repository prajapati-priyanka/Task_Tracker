import React from 'react'
import { ReactComponent as HamburgerMenu } from "../../../assets/menu.svg";

import SearchField from './SearchField';
import useScreenMedia from '../../../hooks/useScreenMedia';


const Header = () => {
  const mediaQueries = useScreenMedia();
  return (

    <header className={`items-center grid ${mediaQueries.xl ? "grid-cols-[1fr_auto_1fr]" : ""} gap-4 md:gap-0 md:flex `}>
       <button
        className="mr-6 block xl:hidden"
       
      >
        <HamburgerMenu />
      </button>
    
       <SearchField />
       <div className="text-center">
        <span className="text-slate-600  uppercase font-bold text-sm block xl:hidden">
          Task Management 
        </span>
       
      </div>
  

      <div className="flex flex-1 ">
       
      <button className={`btn sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400     sm:shadow-transparent`}>
        Add new task
      </button>
        
      </div>

   
  </header>
  )
}

export default Header