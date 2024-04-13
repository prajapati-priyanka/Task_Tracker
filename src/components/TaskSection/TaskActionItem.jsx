import React from 'react'
import BtnToggleCompleted from './BtnToggleCompleted'
import BtnDeleteTask from './BtnDeleteTask'
import BtnEditTask from './BtnEditTask'

const TaskActionItem = () => {
  return (
    <div
    className={`flex border-dashed border-slate-200 border-t-2 w-full pt-4 mt-4
    }`}
  >
    <BtnToggleCompleted />
    <BtnDeleteTask />
    <BtnEditTask />
   
    
    {/* <BtnMarkAsImportant taskId={task.id} taskImportant={task.important} />
    <BtnDeleteTask taskId={task.id} />
    <BtnEditTask task={task} /> */}
  </div>
  )
}

export default TaskActionItem