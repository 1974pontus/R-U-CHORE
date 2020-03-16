import React, { CSSProperties } from "react";
import { Todo, ToggleTodo } from "./types";
import './checkbox.css'
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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
        <IconButton style={ icons }
            aria-label="HighlightOff"
            onClick={() => {
              handleTodoRemove(todo.text);
            }}
          >
            <HighlightOffIcon />
          </IconButton>
        {/* <button onClick={() => handleTodoRemove(todo.text)}>X</button> */}
      </label>
    </li>
  );
};

const icons: CSSProperties = {
  color: 'grey'

}


export default TodoListItem;
