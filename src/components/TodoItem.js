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


    // add a prop of markcompleted to todoitem and use the prop on the main todo compo and add func.
    render(){
        const {id, title} = this.props.todo // Using constructor to pull props data

        return (
            <div style= {this.getStyle()}>
                <p>
                    <input type = 'checkbox' onChange = {this.props.markCompleted.bind(this, id)} /> 
                    { '  ' } 
                    {title}
                    <button style = {btnStyle} onClick = {this.props.delTodo.bind(this, id)}> x </button>
                </p>
            </div> 
        )
    }
}

const btnStyle = {
    padding: '2px 6px',
    backgroundColor: 'green',
    float: 'right',
    border: 'none',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer'
}
TodoItem.propTypes = {
    todoitem: PropTypes.object.isRequired
}


export default TodoItem;