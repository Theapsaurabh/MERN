import {  useState } from "react";
import "./todo.css";
import { TodoForm } from "./TodoForm";
import TodoList from "./TodoList";
import DateTime from "./DateTime";

const Todo = () => {
  const [task, setTask] = useState([]);
  

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
  };
  

  // delete function
  const handleToDoDelete = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };
  const handleClearAllTasks = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <DateTime/>
        
      </header>
      <TodoForm onAddToDo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <TodoList key={index} curTask={curTask} handleToDoDelete={handleToDoDelete}/>
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearAllTasks}>
          {" "}
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
