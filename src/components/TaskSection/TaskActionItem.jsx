import React from "react";
import DeleteTaskBtn from "./DeleteTaskBtn";
import EditTaskBtn from "./EditTaskBtn";
import CompletedBtnToggle from "./CompletedBtnToggle";

const TaskActionItem = ({ task }) => {
  return (
    <div className="flex border-dashed border-slate-200 dark:border-slate-700/[.3] border-t-2 w-full pt-4 mt-4">
      <CompletedBtnToggle
        taskCompleted={task.completed}
        taskPending={task.pending}
        taskId={task.id}
      />
      <DeleteTaskBtn taskId={task.id} />
      <EditTaskBtn task={task} />
    </div>
  );
};

export default TaskActionItem;
