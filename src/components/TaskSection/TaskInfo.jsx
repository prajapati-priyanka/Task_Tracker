import React from "react";
import useDate from "../../hooks/useDate";
import { ReactComponent as Calendar } from "../../assets/date.svg";
const TaskInfo = ({ task }) => {
  const dateFormated = useDate(task.date);
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between mb-2">
        <span className="block font-medium">
          {task.title}
        </span>
      </div>
      <p
        title={task.description}
        className="description mb-2 text-slate-500 line-clamp-3
      "
      >
        {task.description}
      </p>
      <time className="mt-auto flex w-full">
        <Calendar className="mr-2 w-4 sm:w-5" /> {dateFormated}
      </time>
    </div>
  );
};

export default TaskInfo;
