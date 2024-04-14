import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header/Header";
import CompletedTasks from "../TaskSection/CompletedTask";
import AllTasks from "../TaskSection/AllTasks";

const Main = () => {
  return (
    <div className="pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route
          path="/completed"
          element={<CompletedTasks done={true} title="Completed Tasks" />}
        />
        <Route
          path="/pending"
          element={<CompletedTasks done={false} title="Pending Tasks" />}
        />
      </Routes>
    </div>
  );
};

export default Main;
