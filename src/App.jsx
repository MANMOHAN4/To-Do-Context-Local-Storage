import { useState } from "react";
import "./App.css";
import { ToDoContextProvider } from "./contexts/ToDoContext";

function App() {
  const [todos, setTodos] = useState([]);
  
  const addToDo = () => {
    
  }

  return (
    <ToDoContextProvider
      value={
        (todos, addTodo, updateTodo, deleteTodo, toggleStatus)
      }
    >

      
      
      
      
    </ToDoContextProvider>
  );
}

export default App;
