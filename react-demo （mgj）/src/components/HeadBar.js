import React, { Component } from "react";
const HeadBar = props => (
  <div className="head">
    <input
      type="text"
      value={props.inputValue}
      onChange={e => props.onChange(e.target.value)}
    />
    <button onClick={() => props.click()}>Add</button>
  </div>
);

export default HeadBar;
