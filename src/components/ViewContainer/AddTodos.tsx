import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { AddTodo } from './types'
import FormField from './FormField'

interface AddTodoProps {
    addTodo: AddTodo;
}

const AddTodos: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    }

    return (
        <form>
            {/* <input type="text" value={newTodo} onChange={handleChange}/> 
            <button type='submit' onClick={handleSubmit}>Add Todo</button> */}
            <FormField type={"text"}onChange={handleChange} inputplaceholder={'More Todo´s'} value={newTodo} onClick={handleSubmit} buttontext={'ADD'}/>
        </form>
    )
}

export default AddTodos