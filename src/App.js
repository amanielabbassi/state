import React, { Component } from "react";
import Counter from "./Counter";

import "./App.css" ;

class App extends Component {
  constructor(props) {
    console.log("constructor()");
    super(props);

    this.state = {
      show: false,
    };
  }
  
  
  handleshow = () => {
    this.setState({ show: !this.state.show });
    
  };
  render() {
    console.log("render()");
    console.log(this.state.int);

    return (
      <header className='hed'>
      <div className='bag'>
        {this.state.show ? <Counter /> : ""}
        <br />
       
        <button className='button' onClick={this.handleshow}>
          {" "}
          {this.state.show ? "Hide" : "Show"}
        </button>
        <br />
        
      </div>
      </header>
    );
  }
}

export default App;
