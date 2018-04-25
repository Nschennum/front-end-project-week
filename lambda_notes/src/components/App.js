import React, { Component } from 'react';
import './App.css';
// import { fetchTodos, createTodo } from './actions';
import { connect } from 'react-redux';
import { getNotes } from "./defaultNotes";
import DisplayNotes from './DisplayNotes'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./sidebar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: getNotes(),
      view: "list",
    }}; 

    render() {
      return (
        <Router>
          <div className="App">
          <Route path="/" component={SideBar} />
            <DisplayNotes notes={this.state.notes} exact />
          </div>
        </Router>
      );
    }
  }

export default App;

