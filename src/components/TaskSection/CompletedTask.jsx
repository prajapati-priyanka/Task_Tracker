import React from "react";
import { useSelector } from "react-redux";
import TaskLayout from "../../utilities/TaskLayout";
import useCompletedTasks from "../../hooks/useCompletedTasks";

const DoneTasks = ({ done, title }) => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const { tasks: tasksFiltered } = useCompletedTasks({ tasks, done });

  return <TaskLayout title={title} tasks={tasksFiltered} />;
};

export default DoneTasks;
