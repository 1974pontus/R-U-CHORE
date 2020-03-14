import React, { CSSProperties } from "react";
import { Todo, ToggleTodo } from "./types";
import './checkbox.css'
interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  const completed: CSSProperties = {
    textDecoration: "line-through",
    color: "#444444",
    fontStyle: "italic"
  };
  return (
    <li >
      <label className="checkbox" style={todo.complete ? completed : undefined}>
        <input
          type="checkbox" 
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        <span>{todo.text}</span>
        
      </label>
    </li>
  );
};




export default TodoListItem;
