import React, { Component } from 'react';

class ItemBar extends Component{
    constructor(props){
      super(props);
      this.state={
        value:''
      };
      this.textChange=this.textChange.bind(this);
    }
    textChange(e){
      this.setState({
        value:e.target.value
      })
    }
    render(){
      const {value}=this.state;
      const {list,changenum}=this.props;
      return (
        <div style={{padding:"10px 0"}}>
          <ul>
            {
              list.map((item,index)=>{
                if(changenum===index){
                  return (
                    <li key={index}>
                        <input type='text' onChange={this.textChange} value={value}/>
                        <button onClick={()=>this.props.save(index,this.state.value)}>确定</button>
                    </li>
                  )
                }else{
                  return (
                    <li key={index}>
                      {item.text}
                      <button onClick={()=>this.props.delete(index,item.key)}>Delete</button>
                      <button disabled={list[index].stateValue==4?'true':''} style={{backgroundColor:list[index].stateValue===4?'red':''}} onClick={()=>this.props.stateChange(index)} >State:{list[index].stateValue}</button>
                      <button onClick={()=>this.props.modify(index)}>Modify</button>
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
        )
    }
  
  }

  
  export default ItemBar;