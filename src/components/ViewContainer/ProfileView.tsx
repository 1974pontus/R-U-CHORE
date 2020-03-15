import React, { useState } from "react";
import TodoList from "./TodoList";
import { ToggleTodo, AddTodo, Todo } from "./types";
import FormField from "./FormField";
import { ProfileData } from "./ProfileData";
import Title from "./Title";

interface Props {
  profile: ProfileData
  name: string
}

const ProfileView: React.FC<Props> = props => {
  const [todos, setTodos] = useState(props.profile.initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  function handleTodoRemove(text: string) {
    const newTodos: Todo[] = todos.filter((todo: Todo) => todo.text !== text)
    setTodos(newTodos)
  }

  // let profile: {this.props.onSubmit(profileData[0]}

  return (
    <React.Fragment>
      {/* <h1>{props.name}</h1> */}
      <Title name={props.name} titleContent={props.profile.titel} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo}
        handleTodoRemove={handleTodoRemove}
        />
        

      <FormField
        onSubmit={addTodo}
        buttonText="submit"
        placeHolder="Add your todos"
      />
    </React.Fragment>
  );
};

export default ProfileView;
