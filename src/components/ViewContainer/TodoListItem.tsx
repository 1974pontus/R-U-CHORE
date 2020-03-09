import React, { CSSProperties } from "react";
import { Todo, ToggleTodo } from "./types";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  const completed: CSSProperties = {
    textDecoration: "line-through",
    color: "#cdcdcd",
    fontStyle: "italic"
  };
  return (
    <li style={{ listStyleType: "none" }}>
      <label style={todo.complete ? completed : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
