import React from 'react'
import { ReactComponent as Calendar } from "../../assets/date.svg";
import TaskActionItem from './TaskActionItem';

const TaskCard = ({task}) => {

  const {title, description,date} = task
  return (
    <>
      <article className={`bg-white rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 flex-col h-52 sm:h-64`}>
      <div
        className={`flex items-center justify-between mb-2
        }`}
      >
        <span className="block font-medium dark:text-slate-200">
         {title}
        </span>
      </div>
      <p
        // title={task.description}
        // title={task.description}
        className={`description mb-2 text-slate-500 dark:text-slate-500 line-clamp-3
        }`}
      >
       {description}
      </p>
      <time className="mt-auto flex w-full">
        <Calendar className="mr-2 w-4 sm:w-5" /> {date}
      </time>

      <TaskActionItem />
    </article>
     
    </>
  
  )
}

export default TaskCard