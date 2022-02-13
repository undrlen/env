import React, { useState, useEffect } from "react";

import Search from "../Search/Search";
import Add from "../Add/Add";
import Tasks from "../Tasks/Tasks";

const App = () => {
  const [data, updateData] = useState({
    tasks: [],
  });

  let [count, setCount] = useState(0);
  let [booleanValue, setBoolean] = useState();
  let [letters, addLetters] = useState("");

  const addTask = (claim) => {
    setCount((count = count + 1));
    updateData((data) => {
      return {
        tasks: [
          ...data.tasks,
          {
            id: count,
            claim: claim,
            important: false,
            done: false,
          },
        ],
      };
    });
  };

  const rmTask = (id) => {
    updateData((data) => {
      return {
        tasks: data.tasks.filter((el) => el.id !== id),
      };
    });
  };

  const toggleImportant = (id) => {
    updateData((data) => {
      return {
        tasks: data.tasks.map((el) => {
          if (el.id === id)
            return Object.assign(el, { important: !el.important });
          else return el;
        }),
      };
    });
  };

  const toggleDone = (id) => {
    updateData((data) => {
      return {
        tasks: data.tasks.map((el) => {
          if (el.id === id) return Object.assign(el, { done: !el.done });
          else return el;
        }),
      };
    });
  };

  const selectDone = (b) => {
    setBoolean(b);
  };

  const selectLetters = (l) => {
    addLetters(l);
  };

  const filterData = () => {
    if (booleanValue === undefined) return data.tasks;
    return data.tasks.filter((el) => el.done === booleanValue);
  };

  const visibleData = () => {
    if (!letters) return filterData();
    return filterData().filter(
      (el) => el.claim.toLowerCase().indexOf(letters.toLowerCase()) > -1
    );
  };

  return (
    <>
      <div className="wrap">
        <Search
          selectDone={selectDone}
          selectLetters={selectLetters}
          booleanValue={booleanValue}
        />
        <Tasks
          data={visibleData()}
          remove={rmTask}
          toggleImportant={toggleImportant}
          toggleDone={toggleDone}
        />
        <Add addTask={addTask} />
      </div>
    </>
  );
};

export default App;
