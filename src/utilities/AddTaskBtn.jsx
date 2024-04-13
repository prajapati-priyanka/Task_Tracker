import React from "react";
import {useDispatch} from "react-redux";
import { modalActions } from "../redux/store/slices/modalSlice";


const AddTaskBtn  = ({ className }) => {
  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.openModalCreateTask());
  };
  return (
    <>
      <button className={`btn  ${className}`} onClick={onOpenModal}>
        Add new task
      </button>
    </>
  );
};

export default AddTaskBtn;
