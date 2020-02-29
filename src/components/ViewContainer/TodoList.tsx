import React from 'react'
import TodoItem from './TodoItem'

// Import interfaces
import { TodoListInterface } from './interface'


const TodoList = (props: TodoListInterface) => {
  
  return (<div className="todo-list">
    <ul>
      {props.todos.map((todo: {
        id: string | number | undefined
      }) => (<li key={todo.id}>
        <TodoItem todo = {todo} handleTodoUpdate={props.handleTodoUpdate} handleTodoRemove={props.handleTodoRemove} handleTodoComplete={props.handleTodoComplete} />
      </li>))}
    </ul>
  </div>)
}

export default TodoList