import { createSlice } from "@reduxjs/toolkit";


const defaultTasks = [
    {
        title: "Task 1",
        important: false,
        description: "This is the description for this task",
        date: "2023-04-12",
        completed: true,
        id: "t1",
    },
    {
        title: "Task 2",
        important: true,
        description: "This is the description for this task",
        date: "2023-05-15",

        completed: true,
        id: "t2",
    },
    {
        title: "Task 3",
        important: false,
        description: "This is the description for this task",
        date: "2023-08-21",

        completed: false,
        id: "t3",
    },
];

const initialState = {
    tasks: localStorage?.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : defaultTasks,
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addNewTask(state, action) {
            state.tasks = [action.payload, ...state.tasks];
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
    },


});


export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;