import React from "react";

import TaskActionItem from "./TaskActionItem";
import TaskInfo from "./TaskInfo";

const TaskCard = ({ task }) => {
  return (
    <>
      <article
        className={`bg-white rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 flex-col h-52 sm:h-64`}
      >
        <TaskInfo task={task} />
        <TaskActionItem task={task} />
      </article>
    </>
  );
};

export default React.memo(TaskCard);
