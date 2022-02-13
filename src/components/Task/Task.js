import React from "react";

const Task = ({
  claim,
  important,
  done,
  remove,
  toggleImportant,
  toggleDone,
}) => {
  const imp = important ? "important" : "";
  const isDone = done ? "done" : "";
  return (
    <div>
      <span className={`task ${imp} ${isDone}`} onClick={toggleDone}>
        {claim}
      </span>
      <span className="important_button" onClick={toggleImportant}>
        {"\uF339"}
      </span>
      <span className="del_button" onClick={remove}>
        {"\uF5DE"}
      </span>
    </div>
  );
};

export default Task;
