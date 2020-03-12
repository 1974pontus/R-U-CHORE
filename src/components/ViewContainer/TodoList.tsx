import React, { CSSProperties } from "react"
import TodoListItem from "./TodoListItem";
import { Todo, ToggleTodo } from "./types";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <ul style={centerTodos} >
      {todos.map(todo => {
        return (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        )
      })}
    </ul>
    </div>
  );
};


export default TodoList
const centerTodos: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flexStart",
  flexDirection: "column",
  listStyleType: "none"
};