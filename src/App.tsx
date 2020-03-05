import React, { Fragment, useState, FormEvent } from "react";
import "./App.css";

function App(): JSX.Element {
  type FormEl = FormEvent<HTMLFormElement>;
  interface ITodo {
    title: string;
    completed: boolean;
  }
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleSubmit = (e: FormEl): void => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (todo: string): void => {
    setTodos([...todos.filter(t => t !== todo)]);
  };
  return (
    <Fragment>
      <h1>TODO LIST</h1>
      <div>
        {todos &&
          todos.map((todo: string, ind: number) => (
            <Fragment>
              <div key={ind}> {todo} </div>
              <button onClick={() => deleteTodo(todo)}>Delete</button>
            </Fragment>
          ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          onChange={e => setTodo(e.target.value)}
          value={todo}
        />
        <input type="submit" value="addTodo" />
      </form>
    </Fragment>
  );
}

export default App;
