import React from "react";
import Dropdown from "./Dropdown";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import useSortTasks from "../../hooks/useSortTasks";

const Task = ({title}) => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const { sortedBy, setSortedBy, sortedTasks } = useSortTasks(tasks);

  const tasksTitle = `${title} (${tasks.length} ${
    tasks.length === 1 ? "task" : "tasks"
  })`;
  
  return (
    <section>
      <div className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex sm:justify-between">
        <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg text-center">
          {" "}
          {tasksTitle}
        </h1>
        {/* dropdown component */}
        <Dropdown sortedBy={sortedBy} setSortedBy={setSortedBy} />
      </div>
      <div className="flex flex-row gap-8 mt-10">
        {/* Task component */}
        {sortedTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default Task;
