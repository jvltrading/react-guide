import React, { Component } from 'react';
import './App.css';
import Person from "./person/person"

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 20},
      {name: 'Josh', age: 34},
      {name: 'Erin', age: 19},
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age: 23},
      {name: 'Joshua', age: 22},
      {name: 'Erin the magnificent', age: 17},
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState( { 
      persons: [
      {name: 'Max', age: 23},
      {name: event.target.value, age: 22},
      {name: 'Erin the magnificent', age: 17},
      ]
    })
  }

  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p>This is really working</p>
        <button style={style}
          onClick={() => this.switchNameHandler("Max!!")}>
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
          This is a text test
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, "Josh, the kind hacker")}
          changed={this.nameChangedHandler}>
          This is a text test
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
          This is a text test
        </Person>
      </div>
    );
  }
}

export default App;