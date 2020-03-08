import React, { Fragment, useContext, useEffect } from "react";
import { Store, IEpisode } from "./context/appcontext/appContext";
import { getEpisodes } from "./context/appcontext/actions";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    getEpisodes().then(res => {
      dispatch({ type: "FETCH_DATA", payload: res });
    });
  }, [dispatch]);

  const renderList = (): JSX.Element[] | null => {
    if (state.episodes) {
      return state.episodes.map((ep: IEpisode) => {
        return (
          <div key={ep.id} className="col-xs-12 col-md-6 mt-2">
            <div className="card">
              <img
                className="card-img-top"
                src={ep.image.medium}
                alt="Episode pic"
              />
              <div className="card-body">
                <h5 className="card-title"> {ep.name}</h5>
                <p className="card-text">Season: {ep.season}</p>
                <p className="card-text">Part: {ep.number}</p>
                <p className="card-text">Airdate: {ep.airdate}</p>
                <button className="btn btn-primary">Add to favourites</button>
              </div>
            </div>
          </div>
        );
      });
    }
    return null;
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Rick and Morty Episodes</h1>
      <div className="container">
        <div className="row">{renderList()}</div>
      </div>
    </Fragment>
  );
  // type FormEl = FormEvent<HTMLFormElement>;
  // interface ITodo {
  //   title: string;
  //   completed: boolean;
  // }
  // const [todos, setTodos] = useState<string[]>([]);
  // const [todo, setTodo] = useState<string>("");

  // const handleSubmit = (e: FormEl): void => {
  //   e.preventDefault();
  //   setTodos([...todos, todo]);
  //   setTodo("");
  // };

  // const deleteTodo = (todo: string): void => {
  //   setTodos([...todos.filter(t => t !== todo)]);
  // };
  // return (
  //   <Fragment>
  //     <h1>TODO LIST</h1>
  //     <div>
  //       {todos &&
  //         todos.map((todo: string, ind: number) => (
  //           <Fragment>
  //             <div key={ind}> {todo} </div>
  //             <button onClick={() => deleteTodo(todo)}>Delete</button>
  //           </Fragment>
  //         ))}
  //     </div>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         required
  //         onChange={e => setTodo(e.target.value)}
  //         value={todo}
  //       />
  //       <input type="submit" value="addTodo" />
  //     </form>
  //   </Fragment>
  // );
}

export default App;
