import React from "react";
import "./list.css";

const List = ({ text, todos, setTodos, id, setUserInput }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((value) => value.id !== id));
  };

  const editHandler = () => {
       setUserInput(text);
      setTodos(
        todos.map((elem) => {
          if (elem.id === id) {
            return { ...elem, value: userInput };
          }
          return elem;
        })
      );

      if (document.querySelector(".edit_btn").innerHTML === "Edit") {
        document.querySelector(".edit_btn").innerHTML = "Update";
      } else if (document.querySelector(".edit_btn").innerHTML === "Update") {
        document.querySelector(".edit_btn").innerHTML = "Edit";
      }

  };

  return (
    <>
      <ul className="list">
        <li>{text}</li>
        <div className="buttons">
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={editHandler}>Edit</button>
        </div>
      </ul>
    </>
  );
};

export default List;
