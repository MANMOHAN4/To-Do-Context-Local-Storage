import React, { useState } from "react";
import { useToDo } from "../contexts/index";

function ToDoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const [todoMessage, setTodoMessage] = useState(todo.todoMsg);

  const { updateTodo, deleteTod, toggleStatus } = useToDo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todoMsg: todoMessage });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleStatus(todo.id);
  };

  return <div></div>;
}

export default ToDoItem;
