import React from "react";

const Search = ({ selectDone, selectLetters, booleanValue }) => {
  const buttons = [
    { bool: undefined, label: "All" },
    { bool: false, label: "Active" },
    { bool: true, label: "Done" },
  ];

  const elements = buttons.map(({ bool, label }) => {
    const isActive = bool === booleanValue;
    const classNames = isActive ? "button_color" : "";
    return (
      <button
        className={classNames}
        onClick={() => selectDone(bool)}
        key={label}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="form_search">
      <input
        type="text"
        placeholder="Type to search"
        className="input_search"
        onChange={(e) => selectLetters(e.target.value)}
      ></input>
      {elements}
    </div>
  );
};

export default Search;
