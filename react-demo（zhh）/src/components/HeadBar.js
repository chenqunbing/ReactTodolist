import React, { Component } from 'react';
class HeadBar extends Component{
    constructor(props){
      super(props);
      this.addClick=this.addClick.bind(this);
      this.textChange=this.textChange.bind(this);
      this.state={
        value:''
      };
    }
    textChange(e){
      this.setState({
        value:e.target.value
      })
    }
    addClick(){
      const {value}=this.state;
      this.props.click(value);
      this.setState({
        value:''
      })
    }
    render(){
      const {value}=this.state;
      return (
        <div className="head">
          <input type='text' value={value}  onChange={this.textChange}/>
          <button onClick={this.addClick}>Add</button>
        </div>
        )
    }
  }

  export default HeadBar;