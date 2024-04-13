import React from 'react';
import { ReactComponent as Trash } from "../../assets/trash.svg";

const BtnDeleteTask = () => {
  return (
    <button
    className="ml-2 transition hover:text-slate-700"
  >
    <Trash className="w-5 h-5 sm:w-6 sm:h-6" />
  </button>
  )
}

export default BtnDeleteTask