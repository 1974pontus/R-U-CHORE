import React, { useState } from 'react'
import TodoList from './TodoList'
import { Todo, ToggleTodo, AddTodo } from './types'
import AddTodos from './AddTodos'


     

const initialTodos: Array<Todo> = [
    { text:'Putsa Pistolerna', complete: true},
    { text: 'Köpa Höghatt', complete: false}
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
    <React.Fragment>
       <TodoList todos={todos} toggleTodo={toggleTodo} />
       <AddTodos addTodo={addTodo}/>
    </React.Fragment>
)
}

export default ProfileView