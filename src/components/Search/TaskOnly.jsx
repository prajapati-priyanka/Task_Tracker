import React, { useState, useEffect } from "react";
import TaskLayout from "../../utilities/TaskLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const TaskOnly = () => {
  const params = useParams();
  const navigate = useNavigate();

  const tasks = useSelector((store) => store.tasks.tasks);

  const [matchedTask, setMatchedTask] = useState([]);

  useEffect(() => {
    const taskId = params.taskId;
    const filteredTask = tasks.filter((task) => taskId === task.id);
    if (!filteredTask.length) {
      navigate("/");
    }
    setMatchedTask(filteredTask);
  }, [navigate, params.taskId, tasks]);

  const title = matchedTask.length ? matchedTask[0].title : "";



  return <TaskLayout title={title} tasks={matchedTask} />;
};

export default TaskOnly;
