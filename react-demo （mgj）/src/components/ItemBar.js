import React, { Component } from "react";
import { type } from "../config";

const ItemBar = props => (
  <div style={{ padding: "10px 0" }}>
    <ul>
      {props.list &&
        props.list.map((item, index) => (
          <li key={item.key} className={type[item.stateValue]}>
            {item.isModify ? (
              <input
                type="text"
                value={item.modifyValue}
                onChange={e => props.textChange(item.key, e.target.value)}
              />
            ) : (
              item.text
            )}
            <button onClick={() => props.delete(item.key)}>Delete</button>
            <button
              disabled={item.stateValue == 4 ? "true" : ""}
              style={{
                backgroundColor: item.stateValue === 4 ? "red" : ""
              }}
              onClick={() => props.stateChange(item.key)}
            >
              State:{item.stateValue}
            </button>
            {item.isModify ? (
              <button onClick={() => props.save(item.key)}>确定</button>
            ) : (
              <button onClick={() => props.modify(item.key)}>Modify</button>
            )}
            {item.isModify && (
              <button onClick={() => props.cancel(item.key)}>取消</button>
            )}
          </li>
        ))}
    </ul>
  </div>
);

export default ItemBar;
