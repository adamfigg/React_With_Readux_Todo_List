import React, { Component } from 'react';
import { addTask, deleteTask, finishedTask } from './ducks/toDoList';
import { connect } from 'react-redux';
import logo from './spinner_PNG52.png';
import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm.js';
import Tasks from './components/Tasks/Tasks.js';
import CompletedTasks from './components/CompletedTasks/CompletedTasks.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to the Task List Manager</h2>
        </div>
        <ToDoForm />
        <Tasks />
        <CompletedTasks />
      </div>

    );
  }
}

export default App;
