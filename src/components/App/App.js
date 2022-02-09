import React from "react";

const App = () => {
  return (
    <>
      <div className="wrap">
        <form action="#0" className="form_search">
          <input type="text" placeholder="Type to search" className="input_search"></input>
          <button className="button_all">All</button>
          <button className="button_active">Active</button>
          <button className="button_done">Done</button>
        </form>
        <div class="tasks">
          <div>
            <span className="task">One task</span>
            <span className="important_button">{"\uF339"}</span>
            <span className="del_button">{"\uF5DE"}</span>
          </div>
          <div>
            <span className="task">Second task</span>
            <span className="important_button">{"\uF339"}</span>
            <span className="del_button">{"\uF5DE"}</span>
          </div>
          <div>
            <span className="task">Three task</span>
            <span className="important_button">{"\uF339"}</span>
            <span className="del_button">{"\uF5DE"}</span>
          </div>
        </div>
        <form action="#0" className="form_add">
          <input type="text" placeholder="What needs to be done" className="input_add"></input>
          <button type="submit" className="button_add">Add task</button>
        </form>
      </div>
    </>
  );
};

export default App;