import React from "react";

import Task from "../Task/Task";

const Tasks = ({ data }) => {

  const collection = data.tasks.map((el) => {
    const { id, ...elProps } = el;
    return (
      <div key={id}>
        <Task {...elProps} />
      </div>
    );
  });
  return (<div className="tasks">{collection}</div>);
};

export default Tasks;