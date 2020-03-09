import React, { useState, CSSProperties } from "react";
import TodoList from "./TodoList";
import { ToggleTodo, AddTodo } from "./types";
import FormField from "./FormField";
import { ProfileData } from "./ProfileData";

interface Props {
  profile: ProfileData
}


const ProfileView: React.FC<Props> = (props) => {
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

  return (
    <div style={liststyling}>
      <React.Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <FormField
          onSubmit={addTodo}
          buttonText="submit"
          placeHolder="Add your todos"
        />
      </React.Fragment>
    </div>
  );
};

const liststyling: CSSProperties = {
  marginTop: "7rem",
  fontSize: "30px",
  fontFamily: "monospace"
};

export default ProfileView;
