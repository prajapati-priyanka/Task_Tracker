import React from "react";
import useSortTasks from "../hooks/useSortTasks";
import Dropdown from "../components/TaskSection/Dropdown";
import TaskCard from "../components/TaskSection/TaskCard";
import { useDispatch } from "react-redux";
import { modalActions } from "../redux/slices/modalSlice";

const TaskLayout = ({ title, tasks }) => {
  const dispatch = useDispatch();

  const { sortedBy, setSortedBy, sortedTasks } = useSortTasks(tasks);

  const tasksTitle = `${title} (${tasks?.length} ${
    tasks?.length >= 1 ? "tasks" : "task"
  })`;

  const openModalHandler = () => {
    dispatch(modalActions.openModalCreateTask());
  };

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
      <ul
        className="tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 
            2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"
      >
        {" "}
        {/* Task component */}
        {sortedTasks?.map((task) => (
          <TaskCard key={task?.id} task={task} />
        ))}
        <li>
          <button
            onClick={openModalHandler}
            className="border-2 border-slate-300
             text-slate-400 w-full rounded-lg
              border-dashed transition hover:bg-slate-300
               hover:text-slate-500
                h-52 sm:h-64"
          >
            Add new task
          </button>
        </li>
      </ul>
    </section>
  );
};

export default React.memo(TaskLayout);
