import React, { useState } from "react";
import TodoList from "./TodoList";
import { ToggleTodo, AddTodo } from "./types";
import FormField from "./FormField";
import { ProfileData } from "./ProfileData";
import Title from "./Title";

interface Props {
  profile: ProfileData;
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

  // let profile: {this.props.onSubmit(profileData[0]}

  return (
    <React.Fragment>
      <Title titleContent={props.profile.titel} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo}
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
