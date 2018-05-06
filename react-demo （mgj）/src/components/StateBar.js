import React, { Component } from "react";
import { type } from "../config";
import "./state.css";
const StateBar = props => (
  <div>
    <ul>
      {["1", "2", "3", "4", "all"].map((value, index) => {
        return (
          <li
            className={`states ${type[value]}`}
            key={index}
            onClick={() => props.sort(value)}
          >
            {value}
          </li>
        );
      })}
    </ul>
  </div>
);

export default StateBar;
