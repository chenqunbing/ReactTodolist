import React, { Component } from 'react';
import HeadBar from './components/HeadBar';
import StateBar from './components/StateBar';
import ItemBar from './components/ItemBar';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
      anotherList:[],
      changenum:-1,
      num:0
    };
    this.addClick=this.addClick.bind(this);
    this.deleteHandle=this.deleteHandle.bind(this);
    this.sortHandle=this.sortHandle.bind(this);
    this.stateChange=this.stateChange.bind(this);
    this.modifyHandle=this.modifyHandle.bind(this);
    this.saveHandle=this.saveHandle.bind(this);
  }
  addClick(value){
    const { num }=this.state;
    if(value==''){
      return false;
    }
    this.state.anotherList.push({text:value,stateValue:1,key:{num}});
    this.state.list.push({text:value,stateValue:1,key:{num}});
    this.state.num++;
    this.setState({
      anotherList:this.state.anotherList,
      list:this.state.list,
      num:this.state.num
    })
    console.log(this.state);
  }
//???
  deleteHandle(index,key){
    const list=this.state.list.filter((value,i)=>(i!==index));
    const anotherList=this.state.anotherList.filter((value,i)=>(i!==key.num));
    console.log(list,anotherList);
    this.setState({
      list,
      anotherList
    })
    console.log(this.state);
  }
  sortHandle(value){
    if(value==='all'){
      this.setState({
        list:this.state.anotherList
      })
    }else{
      const list=this.state.anotherList.filter((item,index)=>(item.stateValue===value));
      this.setState({
        list
      })
    }
  }

  stateChange(index){
    if(this.state.list[index].stateValue!==4){
      this.state.list[index].stateValue++;
      this.setState({
        list:this.state.list,
        // anotherList:this.state.anotherList
      })
    }
  }
  modifyHandle(index){
    this.setState({
      changenum:index
    })

  }
  saveHandle(index,value){
    this.state.list[index].text=value;
    this.setState({
      changenum:-1,
      list:this.state.list,
      anotherList:this.state.list
    })
    
  }
  render(){
    const {list,changenum}=this.state;
    return (
      <div style={{padding:'20px 0 0 20px'}}>
        <HeadBar list={list} click={this.addClick}/>
        <StateBar sort={this.sortHandle} />
        <ItemBar changenum={changenum} list={list} delete={this.deleteHandle} stateChange={this.stateChange} modify={this.modifyHandle} save={this.saveHandle}/>
      </div>
      )
  }
}

export default App;