// import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Todos from './components/Todos';
import React, { Component } from 'react'

class App extends Component {
  state = {
    todos: [
        {
            id: 1,
            title: "Make dinner",
            completed: true,
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
  render(){
      return (
        <div className="App">
          <Todos todos = {this.state.todos} />
        </div>
      );
  }
}

export default App;
