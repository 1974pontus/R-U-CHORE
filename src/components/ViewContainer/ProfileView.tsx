import React, { useState, CSSProperties } from "react"
import TodoList from './TodoList'
import { Todo, ToggleTodo, AddTodo } from './types'

import FormField from './FormField'


const initialTodos: Array<Todo> = [
    { text:'Putsa Pistolerna', complete: true},
    { text: 'Köpa Höghatt', complete: false},
    { text: 'Laga fickuret', complete: false}
]

const ProfileView: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos)

    const toggleTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo
        })
        setTodos(newTodos)
    }

const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' && 
    setTodos([...todos, { text: newTodo, complete: false}])
}


return (
    <div style={liststyling}>
    <React.Fragment >
       <TodoList todos={todos} toggleTodo={toggleTodo} />
       <FormField onSubmit={addTodo} buttonText='submit' placeHolder='Add your todos' />
    </React.Fragment>
    </div>
)
}

const liststyling: CSSProperties = {
    marginTop: '7rem',
    fontSize: '30px',
    fontFamily: 'monospace',
    backgroungImage: ':img/steamBG.jpg'
}

export default ProfileView