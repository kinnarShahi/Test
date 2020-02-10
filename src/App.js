import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import InputForm from './components/InputForm';
import ToDoList from './components/ToDoList';

// Global id for items being added
let id = 0;

class ToDoApp extends Component{
  constructor(props){
    super(props);

    // Set initial state
    this.state = {
      data: []
    }
  }

  // Add todo handler
  addTodo(val){
    const todo = {text: val, id: id++}
    this.state.data.push(todo);
    this.setState({
      data: this.state.data
    });
  }

  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      data: remainder,
    });
  }

  // Clear all items in the todo list
  clearAll() {
    this.setState({
      data: [],
    });
  }

  render(){
    // Render JSX
    return (
      <div>
        <Title />
        <InputForm 
          addTodo={this.addTodo.bind(this)}
          clearAll={this.clearAll.bind(this)}
        />
        <ToDoList 
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default ToDoApp;
