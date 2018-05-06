import React, { Component } from "react";
import HeadBar from "./components/HeadBar";
import StateBar from "./components/StateBar";
import ItemBar from "./components/ItemBar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      changenum: -1,
      num: 0,
      value: "",
      filterState: "all"
    };
    this.addClick = this.addClick.bind(this);
    this.deleteHandle = this.deleteHandle.bind(this);
    this.sortHandle = this.sortHandle.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.modifyHandle = this.modifyHandle.bind(this);
    this.saveHandle = this.saveHandle.bind(this);
    this.textChange = this.textChange.bind(this);
  }
  addClick() {
    const { value } = this.state;
    const { num } = this.state;
    if (value == "") {
      return false;
    }
    this.state.list.push({
      text: value,
      stateValue: 1,
      key: `item_${num}`,
      isModify: false,
      modifyValue: ""
    });
    this.state.num++;
    this.setState({
      list: this.state.list,
      num: this.state.num,
      value: ""
    });
    console.log(this.state);
  }
  textChange(value) {
    this.setState({
      value: value
    });
  }
  //???
  deleteHandle(key) {
    const list = this.state.list.filter(item => {
      if (item.key !== key) {
        return item;
      }
    });
    this.setState({
      list
    });
  }
  sortHandle(value) {
    this.setState({
      filterState: value
    });
  }

  stateChange(key) {
    const { list } = this.state;
    list.map(item => {
      if (item.key === key && item.stateValue !== "4") {
        item.stateValue++;
        return item;
      }
    });
    this.setState({
      list
    });
  }
  modifyHandle(key) {
    const { list } = this.state;
    console.log("sadfsadf", key);
    list.map(item => {
      console.log(item.key === key);
      if (item.key === key) {
        item.isModify = true;
        return item;
      }
    });
    console.log(list);
    this.setState({
      list
    });
  }
  modifyChange = (key, value) => {
    console.log(key, value);
    const { list } = this.state;
    list.map(item => {
      if (item.key === key) {
        item.modifyValue = value;
        return item;
      }
    });
    this.setState({
      list
    });
  };
  saveHandle(key) {
    const { list } = this.state;
    list.map(item => {
      if (item.key === key) {
        item.text = item.modifyValue;
        item.modifyValue = "";
        item.isModify = false;
        return item;
      }
    });
    this.setState({
      list
    });
  }
  cancel = key => {
    const { list } = this.state;
    list.map(item => {
      if (item.key === key) {
        item.modifyValue = "";
        item.isModify = false;
        return item;
      }
    });
    this.setState({
      list
    });
  };
  render() {
    const { list, changenum, value, filterState } = this.state;
    const viewList = (() => {
      if (filterState === "all") {
        return list;
      } else {
        return list.filter(item => {
          if (item.stateValue == filterState) {
            return item;
          }
        });
      }
    })();
    return (
      <div style={{ padding: "20px 0 0 20px" }}>
        <HeadBar
          list={list}
          click={this.addClick}
          inputValue={value}
          onChange={this.textChange}
        />
        <StateBar sort={this.sortHandle} />
        <ItemBar
          changenum={changenum}
          list={viewList}
          delete={this.deleteHandle}
          stateChange={this.stateChange}
          modify={this.modifyHandle}
          save={this.saveHandle}
          textChange={this.modifyChange}
          cancel={this.cancel}
        />
      </div>
    );
  }
}

export default App;
