import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  // state is obect that data we will change and why we are going to use
  state ={
    count : 0
  };

  // setState is going to call render
  add=()=>{
    this.setState(current => ({count : current.count +1}));
  };
  minus=()=>{
    this.setState(current => ({count : current.count -1}));
  };

  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }
  componentWillMount(){
    console.log("Goodbye, cruel world");
  }
  // class compenent need to 'render'
  render(){
  console.log("I'm rendering");
  return(
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  )
  }
}

export default App;
