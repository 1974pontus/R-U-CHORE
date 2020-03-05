import React, { useState } from 'react'
import { AddTodo } from './types'
import FormField from './FormField'

interface AddTodoProps {
    addTodo: AddTodo;
}

const AddTodos: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('')

  /*   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    } */

    const handleSubmit = (todo: string) => {
        addTodo(todo)
        addTodo(newTodo)
        setNewTodo('')
    } 

    return (
        <form>
            <FormField onSubmit={handleSubmit} defaultValue="Baka" />
            {/* <FormField type={"text"}onChange={handleChange} inputplaceholder={'More Todo´s'} value={newTodo} onClick={handleSubmit} buttontext={'ADD'}/> */}
        </form>
    )
}

export default AddTodos