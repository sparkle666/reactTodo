import React, { Component } from  'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
    getStyle = () => {
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration: "line-through",
        //     }
        // } 
        // else {
        //     return {
        //         textDecoration: 'none',
        //         backgroundColor: 'darkgrey'
        //     }
        // }
        return {
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderBottom: '1px #ccc dotted'

        }
    }
    render(){
        return (
            <div style= {this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todoitem: PropTypes.object.isRequired
}


export default TodoItem;