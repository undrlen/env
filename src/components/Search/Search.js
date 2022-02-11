import React from 'react'

const Search = () => {
  return (
    <form action="#0" className="form_search">
      <input type="text" placeholder="Type to search" className="input_search"></input>
      <button className="button_all">All</button>
      <button className="button_active">Active</button>
      <button className="button_done">Done</button>
    </form>
  );
};

export default Search;