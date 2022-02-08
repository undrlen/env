import React from "react";

const App = () => {
  return (
    <div className="wrap">
      <div>
        <span className="task">Первое задание</span>
        <span className="del_button"></span>
        <span className="important_button"></span>
      </div>
      <div>
        <span className="task">Second task</span>
        <span className="del_button"></span>
        <span className="important_button"></span>
      </div>
      <div>
        <span className="task">Three task</span>
        <span className="del_button"></span>
        <span className="important_button"></span>
      </div>
    </div>
  );
};

export default App;