import React from 'react';

const Task = ({ claim, important, done }) => {
  return (
    <div>
      <span className="task">{claim}</span>
      <span className="important_button">{"\uF339"}</span>
      <span className="del_button">{"\uF5DE"}</span>
    </div>
  );
};

export default Task;