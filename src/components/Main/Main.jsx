import React from "react";
import { Route, Routes } from "react-router-dom";
import CompletedTasks from "../TaskSection/CompletedTask";
import AllTasks from "../TaskSection/AllTasks";
import Header from "../Main/Header/Header"
import SearchResults from "../Search/SearchResults";
import TaskOnly from "../Search/TaskOnly";


const Main = () => {
  return (
    <div className="pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen" data-testid="main-test-id">
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
        <Route path="/results" element={<SearchResults />} />
        <Route path="/task/:taskId" element={<TaskOnly />} />
      </Routes>
    </div>
  );
};

export default Main;
