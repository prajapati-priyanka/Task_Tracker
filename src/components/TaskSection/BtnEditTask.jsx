import React from 'react'
import { ReactComponent as Edit } from "../../assets/edit.svg";

const BtnEditTask = () => {
  return (
    <button
    
      className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center hover:text-slate-700"
    
  >
    <Edit className="w-4 sm:w-5 h-4 sm:h-5" />
  </button>
  )
}

export default BtnEditTask