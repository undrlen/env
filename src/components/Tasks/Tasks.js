import React from "react";

import Task from "../Task/Task";

const Tasks = ({ data, remove, toggleImportant, toggleDone }) => {
  const collection = data.map((el) => {
    const { id, ...elProps } = el;
    return (
      <div key={id}>
        <Task
          {...elProps}
          remove={() => remove(id)}
          toggleImportant={() => toggleImportant(id)}
          toggleDone={() => toggleDone(id)}
        />
      </div>
    );
  });
  return <div className="tasks">{collection}</div>;
};

export default Tasks;
