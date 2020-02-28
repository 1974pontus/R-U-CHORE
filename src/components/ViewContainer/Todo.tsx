import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

const Todo = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
      <TodoItem />
    </div>
  );
};

export default Todo;
