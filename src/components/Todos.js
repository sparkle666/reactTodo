import React, { Component } from 'react'
import TodoItem from "./TodoItem"
import PropTypes from "prop-types"

class Todos extends Component {

    render(){
        // console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <TodoItem key = {todo.id} todo = {todo} markCompleted = {this.props.markCompleted} 
            delTodo = {this.props.delTodo} />  //adding a prop to TodoItemComponent
        ));
    }
}

// Proptypes

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;