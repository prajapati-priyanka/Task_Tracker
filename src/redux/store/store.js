import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../slices/tasksSlice";
import modalReducer from "../slices/modalSlice";
import menuReducer from "../slices/menuSlice";


const store = configureStore({
  reducer: {
     tasks: tasksReducer, 
     modal: modalReducer, 
     menu: menuReducer
   
    },

});


export default store;
