import React from "react";
import ReactDOM from "react-dom";

import Icon from "../public/img/one.jpg";

import "../public/sass/main.sass";

console.log("Привет");
const App = () => {
  return (
    <>
      <img src={Icon} />
      <h2>Hello, World</h2>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));