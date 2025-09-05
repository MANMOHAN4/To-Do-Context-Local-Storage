import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleStatus: (id) => {},
});

export const ToDoContextProvider = ToDoContext.Provider;

export function useToDo() {
  return useContext(ToDoContext);
}
