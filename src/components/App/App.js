import React from "react";

import Search from "../Search/Search";
import Add from "../Add/Add";
import Tasks from "../Tasks/Tasks";

const App = () => {
  return (
    <>
      <div className="wrap">
        <Search />
        <Tasks />
        <Add />
      </div>
    </>
  );
};

export default App;