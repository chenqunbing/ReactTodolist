import React, { Component } from 'react';

class StateBar extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
        <div>
          <ul>
            {
              [1,2,3,4,"all"].map((value,index)=>{
                return <li className="states" key={index} onClick={()=>this.props.sort(value)}>{value}</li>
              })
            }
          </ul>
        </div>
        )
    }
  }

  export default StateBar;