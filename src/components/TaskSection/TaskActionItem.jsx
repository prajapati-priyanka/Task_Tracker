import React from "react";
import DeleteTaskBtn from "./DeleteTaskBtn";
import EditTaskBtn from "./EditTaskBtn";
import CompletedBtnToggle from "./CompletedBtnToggle";

const TaskActionItem = ({ task }) => {
  return (
    <div className="flex border-dashed border-slate-200 border-t-2 w-full pt-4 mt-4">
      <CompletedBtnToggle
        taskCompleted={task.completed}
        taskPending={task.pending}
        taskId={task.id}
      />
      <div className="flex ml-auto">
        <DeleteTaskBtn taskId={task.id} />
        <EditTaskBtn task={task} />
      </div>
    </div>
  );
};

export default TaskActionItem;
