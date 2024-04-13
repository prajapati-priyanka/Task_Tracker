import { useState, useEffect } from "react";

const useSortTasks = (tasks) => {
  const [sortedBy, setSortedBy] = useState("");
  const [sortedTasks, setSortedTasks] = useState(tasks);

  useEffect(() => {
    const sortByDate = (order) => {
      const toMilliseconds = (date) => Date.parse(date);
      const sorted = [...tasks].sort((task1, task2) => {
        const date1 = toMilliseconds(task1.date);
        const date2 = toMilliseconds(task2.date);

        if (date1 < date2) {
          return -1;
        }

        if (date1 > date2) {
          return 1;
        }

        return 0;
      });
      if (order === "min-date") {
        return sorted;
      }

      if (order === "max-date") {
        return sorted.reverse();
      }

      return tasks;
    };

    const sortByCompletedStatus = (completed) => {
      const sorted = [...tasks].sort((task1, task2) => {
        if (completed) {
          if (task1.completed && !task2.completed) {
            return -1;
          }
          if (!task1.completed && task2.completed) {
            return 1;
          }
        } else {
          if (!task1.completed && task2.completed) {
            return -1;
          }
          if (task1.completed && !task2.completed) {
            return 1;
          }
        }
        return 0;
      });

      return sorted;
    };

    let sorted;
    if (sortedBy === "min-date" || sortedBy === "max-date") {
      sorted = sortByDate(sortedBy);
    } else if (sortedBy === "completed-first" || sortedBy === "pending-first") {
      sorted = sortByCompletedStatus(sortedBy === "completed-first");
    } else {
      // Default behavior: no sorting
      sorted = tasks;
    }

    setSortedTasks(sorted);
  }, [sortedBy, tasks]);

  return { sortedBy, setSortedBy, sortedTasks };
};

export default useSortTasks;
