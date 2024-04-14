import React, { useState } from "react";
import { ReactComponent as Edit } from "../../assets/edit.svg";

import { useDispatch } from "react-redux";
import { tasksActions } from "../../redux/store/slices/tasksSlice";
import ModalCreateTask from "../../utilities/ModalTask";

const EditTaskBtn = ({ task }) => {
  const [modalEditTaskOpen, setModalEditTaskOpen] = useState(false);
  const dispatch = useDispatch();

  const closeModalEditTask = () => {
    setModalEditTaskOpen(false);
  };

  const openModalEditTask = () => {
    setModalEditTaskOpen(true);
  };

  const editTaskHandler = (task) => {
    dispatch(tasksActions.editTask(task));
  };

  return (
    <>
      <button
        title="edit task"
        className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center"
        onClick={openModalEditTask}
      >
        <Edit className="w-4 sm:w-5 h-4 sm:h-5" />
      </button>
      {modalEditTaskOpen && (
        <ModalCreateTask
          onClose={closeModalEditTask}
          task={task}
          nameForm="Edit task"
          onConfirm={editTaskHandler}
        />
      )}
    </>
  );
};

export default React.memo(EditTaskBtn);
