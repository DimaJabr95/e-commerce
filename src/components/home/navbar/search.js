import React, { useState, useEffect } from "react";

const Search = (props) => {
  const test = (e) => {
    let value = e.target.value;

    props.test("test-key", value);
  };

  return (
    <form>
      <input
        type="text"
        id="search_field"
        className="form-control"
        placeholder="Search what you need"
        onChange={(e) => test(e)}
      />
    </form>
  );
};

export default Search;
