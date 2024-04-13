import React from "react";
import DeleteTaskBtn from "./DeleteTaskBtn";
import EditTaskBtn from "./EditTaskBtn";
import CompletedBtnToggle from "./CompletedBtnToggle";

const TaskActionItem = ({ task }) => {
  return (
    <div
      className={`flex border-dashed border-slate-200 border-t-2 w-full pt-4 mt-4
    }`}
    >
      <CompletedBtnToggle taskCompleted={task.completed} taskId={task.id} />
      <DeleteTaskBtn taskId={task.id} />
      <EditTaskBtn task={task} />

      {/* <BtnMarkAsImportant taskId={task.id} taskImportant={task.important} />
    <BtnDeleteTask taskId={task.id} />
    <BtnEditTask task={task} /> */}
    </div>
  );
};

export default TaskActionItem;
