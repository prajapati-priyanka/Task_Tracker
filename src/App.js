import React from "react";
import Main from "./components/Main/Main";
import Sidenav from "./components/Sidenav/Sidenav";
import { useSelector, useDispatch } from "react-redux";
import ModalCreateTask from "./utilities/ModalTask";
import { tasksActions } from "./redux/store/slices/tasksSlice";
import { modalActions } from "./redux/store/slices/modalSlice";

const App = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const closeModalCreateTask = () => {
    dispatch(modalActions.closeModalCreateTask());
  };

  const createNewTaskHandler = (task) => {
    dispatch(tasksActions.addNewTask(task));
  };
  return (
    <div className="bg-slate-200 min-h-screen text-slate-600 xl:text-base sm:text-sm text-xs">
      {modal.modalCreateTaskOpen && (
        <ModalCreateTask
          onClose={closeModalCreateTask}
          nameForm="Add a task"
          onConfirm={createNewTaskHandler}
        />
      )}
      <Sidenav />
      <Main />
    </div>
  );
};

export default App;
