import React from "react";

const Add = () => {
  return (
    <form action="#0" className="form_add">
      <input type="text" placeholder="What needs to be done" className="input_add"></input>
      <button type="submit" className="button_add">Add task</button>
    </form>
  );
};

export default Add;