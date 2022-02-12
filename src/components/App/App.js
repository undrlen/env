import React, { useState } from "react";

import Search from "../Search/Search";
import Add from "../Add/Add";
import Tasks from "../Tasks/Tasks";

const App = () => {
  const [data, addData] = useState({
    tasks: [{ id: 0, claim: "Add task below", important: false, done: false }],
  });

  const addTask = (claim) => {
    addData((data) => {
      return {
        tasks: [...data.tasks, {
          id: data.tasks.length,
          claim: claim,
          important: false,
          done: false,
        }]
      };
    });
  };

  return (
    <>
      <div className="wrap">
        <Search />
        <Tasks data={data} />
        <Add addTask={addTask} />
      </div>
    </>
  );
};

export default App;
