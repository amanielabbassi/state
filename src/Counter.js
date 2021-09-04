import './App.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import React, { Component } from "react";
import amani from './image.jpg'
class Counter extends Component {
  state = { fullName:"ELabbassi Amani",
  profession:"Expert Cyber Sécurité ",   
  Src:amani,
  bio:"Son rôle au sein d'une entreprise est d'anticiper les failles liées à la protection des données du système informatique et de sécuriser ces données. Il établit un diagnostic qui lui permet de détecter toutes les failles de sécurité puis, il y apporte des solutions de protection.",
    count: 0,
    int: 0,
  };
  componentDidMount() {
    console.log("componentDidMount()");
    const int = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    this.setState({ int });
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.state.int);
  } 
  render() {
    return <div className='bag-item'>
        
    <img className="image" src={this.state.Src }  style={{width: '15rem',
         borderRadius: '50px', height: '15rem',}}
         alt="photoprofile"/> 
         <h1 className="title">{this.state.fullName}</h1> 
  <p className="paragraphe">{this.state.profession}</p>
    <p className="paragraphe">{this.state.bio}</p>
    <div className='time'>
    <p> <AccessTimeIcon/> Time: {this.state.count}</p></div></div>;
  }
}

export default Counter