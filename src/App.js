import "./App.css";
import ToDoList from "./ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <img
          className="heading__img"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"
        />
        <h1 className="heading__title">To-Do Application</h1>
      </div>
      <ToDoList />
    </div>
  );
}

export default App;
