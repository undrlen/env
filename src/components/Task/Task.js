import React from "react";

const Task = () => {
  return (
    <div>
      <span className="task">One task</span>
      <span className="important_button">{"\uF339"}</span>
      <span className="del_button">{"\uF5DE"}</span>
    </div>
  );
};

export default Task;