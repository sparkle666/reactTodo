// import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Todos from './components/Todos';
import React, { Component } from 'react';
import Header from './components/layout/Header';

class App extends Component {
  state = {
    todos: [
        {
            id: 1,
            title: "Make dinner",
            completed: false,
        },
        {
            id: 2,
            title: "Lets dance tonight.",
            completed: false,
        },
        {
            id: 3,
            title: "Take out the trash",
            completed: false,
        },
    ]
}

markCompleted = (id) => {
    this.setState({todo: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed // Checks if the iterated to is === the id and sets the inverse of it
      }
      return todo;
    })});
}
// Delete todo

delTodo = (id) => {
  this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)]
  })
}
  render(){
      return (
        <div className="App">
          <Header />
          <Todos todos = {this.state.todos} markCompleted = {this.markCompleted} delTodo = {this.delTodo} />
        </div>
      );
  }
}

export default App;
