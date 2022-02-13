import React, { useState } from "react";

const Add = ({ addTask }) => {
  const [targetValue, addState] = useState("");

  function clickAddButton(e) {
    e.preventDefault();
    targetValue && addTask(targetValue);
    addState("");
  }

  function changeState(e) {
    addState(e.target.value);
  }

  return (
    <form action="#0" className="form_add" onSubmit={clickAddButton}>
      <input
        type="text"
        placeholder="What needs to be done"
        className="input_add"
        onChange={changeState}
        value={targetValue}
      ></input>
      <button type="submit" className="button_add">
        Add task
      </button>
    </form>
  );
};

export default Add;
