import React from "react";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as SvgX } from "../../assets/x.svg";
import { useDispatch } from "react-redux";
import { tasksActions } from "../../redux/slices/tasksSlice";


const CompletedBtnToggle = ({ taskCompleted, taskPending, taskId }) => {
  const dispatch = useDispatch();

  const toggleTaskCompleted = (id) => {
  dispatch(tasksActions.toggleTaskCompleted(id));
  };

  return (
    <button
      title={taskCompleted ? "mark as pending" : "mark as completed"}
      className={`${
        taskCompleted
          ? "bg-emerald-200 text-emerald-800 "
          : "bg-amber-200 text-amber-800 "
      } mr-4 order-0 rounded-full font-medium`}
      onClick={() => toggleTaskCompleted(taskId)}
    >
      <span className="block py-1 px-3 absolute invisible sm:static sm:visible">
        {taskCompleted ? "completed" : taskPending ? "pending" : "pending"}
      </span>
      <span className="sm:hidden w-6 h-6 grid place-items-center">
        {taskCompleted ? (
          <Check className="w-3 h-3" />
        ) : (
          <SvgX className="w-3 h-3" />
        )}
      </span>
    </button>
  );
};

export default React.memo(CompletedBtnToggle);
