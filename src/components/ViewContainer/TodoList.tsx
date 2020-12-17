import React, { CSSProperties } from "react";
import TodoListItem from "./TodoListItem";
import { Todo, ToggleTodo } from "./types";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  handleTodoRemove: (text: string) => void;
  };


const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, handleTodoRemove }) => {
  return (
    <div style={flexCenter}>
    <ul style={removeListType} >
      {todos.map(todo => {
        return (
        <TodoListItem 
          key={todo.text} 
          todo={todo} 
          toggleTodo={toggleTodo}
          handleTodoRemove={handleTodoRemove} 
        />
        )
      })}
    </ul>
    </div>
  );
};


export default TodoList;
const removeListType: CSSProperties = {
  listStyleType: "none"
};
const flexCenter: CSSProperties = {
  display: "flex",
  justifyContent: "center"
};