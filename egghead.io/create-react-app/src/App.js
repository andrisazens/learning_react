import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      txt: "new state",
      cat: 0
    }
  }
  update(e){
    this.setState({txt: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React! txt: { this.props.txt }, category: {this.props.cat}, state text: {this.state.txt}, state cat: {this.state.cat} </h2>
          <Widget update={this.update.bind(this)} />
          <Button>I <Heart></Heart> React</Button>
          <Title text="this text large"></Title>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const Button = (props) => <button>{props.children}</button>
const Title = (props) => <h1>Title: {props.text}</h1>
const Widget = (props) => <input type="text" onChange={props.update}/>

class Heart extends Component {
  render(){
    return <span>&hearts;</span>
  }
}

Title.propTypes = {
  //text: React.PropTypes.string.isRequired
  text(props, propName, component) {
    if (!(propName in props)){
      return new Error(`missing ${propName}`);
    }    
    if (props[propName].length < 10){
      return new Error(`${propName} too short`);
    }
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

export default App;
