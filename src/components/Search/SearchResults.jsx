import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useSearchQuery from "../../hooks/useSearchQuery";
import TaskLayout from "../../utilities/TaskLayout";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [currQueryParam, setCurrQueryParam] = useState("");

  useEffect(() => {
    const query = searchParams.get("q");
    if (!query) {
      // se "q" for igual a '' ou "q" não existir
      navigate("/");
    } else {
      setCurrQueryParam(query);
    }
  }, [navigate, searchParams]);

  const matchedTasks = useSearchQuery(currQueryParam);

  const title = `Results for "${currQueryParam}"`;



  return <TaskLayout title={title} tasks={matchedTasks} />;
};

export default SearchResults;
