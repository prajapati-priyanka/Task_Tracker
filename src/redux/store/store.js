import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice";
import modalReducer from "./slices/modalSlice";


const store = configureStore({
  reducer: {
     tasks: tasksReducer, 
     modal: modalReducer, 
   
    },

});


export default store;
