import React from "react";
import { useSelector } from "react-redux";
import TaskLayout from "../../utilities/TaskLayout";

const Home = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return <TaskLayout title="All tasks" tasks={tasks} />;
};

export default Home;
