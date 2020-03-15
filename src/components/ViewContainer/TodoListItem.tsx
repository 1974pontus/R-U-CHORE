import React, { CSSProperties } from "react";
import { Todo, ToggleTodo } from "./types";
import './checkbox.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  handleTodoRemove: (text: string) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, handleTodoRemove }) => {
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
        <IconButton
            aria-label="Delete"
            onClick={() => {
              handleTodoRemove(todo.text);
            }}
          >
            <DeleteIcon />
          </IconButton>
        {/* <button onClick={() => handleTodoRemove(todo.text)}>X</button> */}
      </label>
    </li>
  );
};




export default TodoListItem;
