import React from 'react'
import LayoutMenus from '../../utilities/LayoutMenus'
import Navlinks from './Navlinks'

const Sidenav = () => {
  return (
    <LayoutMenus >
 <div className="h-full flex flex-col">

   <h1 className="font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block">TASK MANAGEMENT</h1>
    {/* Navigation links */}
    <Navlinks />
</div>
    </LayoutMenus>
   
  )
}

export default Sidenav