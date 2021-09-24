import ToDoItem from "./ToDoItem";
import { useState } from "react";
const ToDoList = () => {
  const [toDoList, setToDoList] = useState([
    { item: "laundry", id: "todo-1", order: 1 },
    { item: "vaccum", id: "todo-2", order: 2 },
  ]);

  const [inputItem, setInputItem] = useState({ item: "" });

  const [errorMsg, setErrorMsg] = useState("");

  const [dragId, setDragId] = useState("");

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragItem = toDoList.find((item) => item.id === dragId);
    const dropItem = toDoList.find((item) => item.id === ev.currentTarget.id);

    const dragItemOrder = dragItem.order;
    const dropItemOrder = dropItem.order;

    const newItemState = toDoList.map((item) => {
      if (item.id === dragId) {
        item.order = dropItemOrder;
      }
      if (item.id === ev.currentTarget.id) {
        item.order = dragItemOrder;
      }
      return item;
    });

    setToDoList(newItemState);
  };

  const handleChange = (event) => {
    setInputItem((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputItem);
    if (inputItem.item === "") {
      setErrorMsg("You entered an empty value, please submit again");
    } else {
      const orderArray = toDoList.map((item) => item.order);
      const maxOrder = Math.max(...orderArray);
      console.log(maxOrder);
      setToDoList((oldArray) => [
        ...oldArray,
        {
          item: inputItem.item,
          id: `todo-${maxOrder + 1}`,
          order: maxOrder + 1,
        },
      ]);
      setInputItem({ item: "" });
      setErrorMsg("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="form__label">~ Today I need to ~</label>
        <input
          className="form__input"
          type="text"
          placeholder="Add an item..."
          onChange={handleChange}
          value={inputItem.item}
          name="item"
        />
        <button onClick={handleSubmit} className="button">
          <span>Submit</span>
        </button>
        <p className="error_message">{errorMsg}</p>
      </form>

      <ul className="toDoList">
        {toDoList
          .sort((a, b) => a.order - b.order)
          .map((itemObject) => (
            <div key={itemObject.item}>
              <ToDoItem
                id={itemObject.id}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
                item={itemObject.item}
              />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ToDoList;
