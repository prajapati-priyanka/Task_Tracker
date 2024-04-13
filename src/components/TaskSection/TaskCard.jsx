import React from 'react'
import { ReactComponent as Calendar } from "../../assets/date.svg";
import TaskActionItem from './TaskActionItem';

const TaskCard = () => {
  return (
    <>
      <article className={`bg-white rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 flex-col h-52 sm:h-64`}>
      <div
        className={`flex items-center justify-between mb-2
        }`}
      >
        <span className="block font-medium dark:text-slate-200">
         TASK 1
        </span>
      </div>
      <p
        // title={task.description}
        // title={task.description}
        className={`description mb-2 text-slate-500 dark:text-slate-500 line-clamp-3
        }`}
      >
       This I is my card description
      </p>
      <time className="mt-auto flex w-full">
        <Calendar className="mr-2 w-4 sm:w-5" /> 13/04/2024
      </time>

      <TaskActionItem />
    </article>
      <article className={`bg-white  rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 flex-col h-52 sm:h-64`}>
      <div
        className={`flex items-center justify-between mb-2
        }`}
      >
        <span className="block font-medium dark:text-slate-200">
         TASK 1
        </span>
      </div>
      <p
        // title={task.description}
        // title={task.description}
        className={`description mb-2 text-slate-500 dark:text-slate-500 line-clamp-3
        }`}
      >
       This I is my card description
      </p>
      <time className="mt-auto flex w-full">
        <Calendar className="mr-2 w-4 sm:w-5" /> 13/04/2024
      </time>
      <TaskActionItem />
    </article>
    </>
  
  )
}

export default TaskCard