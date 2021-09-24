import { useState } from "react";

const ToDoItem = (props) => {
  const [completedItem, setCompletedItem] = useState(false);

  const handleComplete = (event) => {
    setCompletedItem(true);
  };
  return (
    <li
      draggable={true}
      id={props.id}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={props.handleDrag}
      onDrop={props.handleDrop}
      style={{ color: completedItem === true ? "grey" : "" }}
    >
      <input
        onChange={handleComplete}
        type="checkbox"
        checked={completedItem === true ? "checked" : ""}
      />
      {props.item}
    </li>
  );
};

export default ToDoItem;
