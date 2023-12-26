import React, { useState } from "react";
import MouseEvent from "react";
import "./Todolist.css";

const Todolist = () => {
  const [inputValue, setInputValues] = useState("");
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(-1);
  const handleInputChange = (e) => {
    setInputValues(e.target.value);
  };

  const handleSetItems = (index) => {
    if (inputValue.trim() !== "") {
      setItems([...items, { text: inputValue, completed: false }]);
      setInputValues("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleCheckBox = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  const handleEditTodo = (index) => {
    setIndex(index);
    setInputValues(items[index].text);
  };

  const handleSave = (index) => {
    const newLists = [...items];
    newLists[index].text = inputValue;
    setItems(newLists);
    setIndex(-1);
    setInputValues("");
  };

  return (
    <>
      <h1>Todo List </h1>
      <input
        type="text"
        placeholder="type a todo..."
        value={inputValue}
        onChange={handleInputChange}
      />
     
      {index == -1 ? (
        <button onClick={handleSetItems}>ADD</button>
      ) : (
        <button onClick={() => handleSave(index)}>SAVE</button>
      )}

      <ul>
        {items.map((item, index) => (
          <li key={item}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckBox(index)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button
              onClick={() => {
                handleDeleteTodo(index);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleEditTodo(index);
              }}
            >
              EDIT
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
