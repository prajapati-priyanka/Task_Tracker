import React, { useState } from "react";
import Modal from "./Modal";

const ModalCreateTask = ({ onClose, task, nameForm, onConfirm }) => {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  const year = today.getFullYear();
  if (day < 10) {
    day = +("0" + day);
  }
  if (month < 10) {
    month = +("0" + month);
  }

  const todayDate = year + "-" + month + "-" + day;
  const maxDate = year + 1 + "-" + month + "-" + day;

  const [description, setDescription] = useState(() => {
    if (task) {
      return task.description;
    }
    return "";
  });
  const [title, setTitle] = useState(() => {
    if (task) {
      return task.title;
    }
    return "";
  });
  const [date, setDate] = useState(() => {
    if (task) {
      return task.date;
    }
    return todayDate;
  });

  const [isPending, setIsPending] = useState(() => {
    if (task) {
      return task.pending;
    }
    return false;
  });

  const [isCompleted, setIsCompleted] = useState(() => {
    if (task) {
      return task.completed;
    }
    return false;
  });

  const toggleCheckbox = (checkbox) => {
    if (checkbox === "pending") {
      setIsPending((prev) => !prev);
      setIsCompleted(false); // Uncheck completed if pending is checked
    } else if (checkbox === "completed") {
      setIsCompleted((prev) => !prev);
      setIsPending(false); // Uncheck pending if completed is checked
    }
  };

  const addNewTaskHandler = (event) => {
    event.preventDefault();

    const newTask = {
      title: title,
      description: description,
      date: date,
      completed: isCompleted,
      pending: isPending,
      id: task?.id ? task.id : Date.now().toString(),
    };
    onConfirm(newTask);
    onClose();
  };

  return (
    <Modal onClose={onClose} title={nameForm}>
      <form
        className="flex flex-col stylesInputsField"
        onSubmit={addNewTaskHandler}
      >
        <label>
          Title
          <input
            type="text"
            placeholder="e.g, study for the test"
            required
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            className="w-full"
          />
        </label>
        <label>
          Date
          <input
            type="date"
            className="w-full"
            value={date}
            required
            onChange={({ target }) => setDate(target.value)}
            min={todayDate}
            max={maxDate}
          />
        </label>
        <label>
          Description
          <textarea
            placeholder="e.g, study for the test"
            className="w-full"
            required
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          ></textarea>
        </label>

        {/* Checkbox for "Mark as pending" */}
        <label className="mb-0 flex items-center cursor-pointer">
          <div className="mr-2 bg-slate-300/[.5] w-5 h-5 rounded-full grid place-items-center border border-slate-300">
            {isPending && (
              <span className="bg-rose-500 w-2 h-2 block rounded-full"></span>
            )}
          </div>
          <span className="order-1 flex-1" onClick={() => toggleCheckbox("pending")}>
            Mark as pending
          </span>
          <input
            type="checkbox"
            className="sr-only"
            checked={isPending}
            onChange={() => toggleCheckbox("pending")}
          />
        </label>

        {/* Checkbox for "Mark as completed" */}
        <label className="mb-0 flex items-center cursor-pointer">
          <div className="mr-2 bg-slate-300/[.5] w-5 h-5 rounded-full grid place-items-center border border-slate-300">
            {isCompleted && (
              <span className="bg-rose-500 w-2 h-2 block rounded-full"></span>
            )}
          </div>
          <span className="order-1 flex-1" onClick={() => toggleCheckbox("completed")}>
            Mark as completed
          </span>
          <input
            type="checkbox"
            className="sr-only"
            checked={isCompleted}
            onChange={() => toggleCheckbox("completed")}
          />
        </label>

        <button type="submit" className="btn mt-5">
          {nameForm}
        </button>
      </form>
    </Modal>
  );
};

export default ModalCreateTask;
