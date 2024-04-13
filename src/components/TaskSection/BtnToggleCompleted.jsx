import React from 'react'
import { ReactComponent as Check } from "../../assets/check.svg";


const BtnToggleCompleted = () => {
    return (
        <button
            title={"mark as completed"}
            className={`bg-emerald-200 text-emerald-800 mr-4 rounded-full font-medium`}

        >
            <span className="block py-1 px-3 absolute invisible sm:static sm:visible">
                completed
            </span>
            <span className="sm:hidden w-6 h-6 grid place-items-center">

                <Check className="w-3 h-3" />

            </span>
        </button>
    )
}

export default BtnToggleCompleted