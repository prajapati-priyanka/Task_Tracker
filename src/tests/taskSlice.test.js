import { tasksActions } from "./redux/store/slices/tasksSlice";

describe("Tasks Reducer", () => {
  describe("Adding a new task", () => {
    it("should add a new task", () => {
      const newTask = {
        title: "New Task",
        important: false,
        description: "This is the description for the new task",
        date: "2024-04-14",
        completed: false,
        id: "t4",
      };

      const initialState = {
        tasks: [],
      };

      const action = tasksActions.action.addNewTask(newTask);
      const newState = tasksActions.reducer(initialState, action);

      expect(newState.tasks.length).toBe(1);
      expect(newState.tasks[0]).toEqual(newTask);
    });
  });

  describe("Removing a task", () => {
    it("should remove a task", () => {
      const taskIdToRemove = "t2";

      const initialState = {
        tasks: [
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
        ],
      };

      const action = tasksActions.action.removeTask(taskIdToRemove);
      const newState = tasksActions.reducer(initialState, action);

      expect(newState.tasks.length).toBe(2);
      expect(
        newState.tasks.find((task) => task.id === taskIdToRemove)
      ).toBeUndefined();
    });
  });

  describe("Editing a task", () => {
    it("should edit a task", () => {
      const editedTask = {
        title: "Task 3 Edited",
        important: true,
        description: "This is the edited description for Task 3",
        date: "2023-08-22",
        completed: true,
        id: "t3",
      };

      const initialState = {
        tasks: [
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
        ],
      };

      const action = tasksActions.action.editTask(editedTask);
      const newState = tasksActions.reducer(initialState, action);

      expect(newState.tasks.length).toBe(3);
      expect(newState.tasks.find((task) => task.id === editedTask.id)).toEqual(
        editedTask
      );
    });
  });
});
