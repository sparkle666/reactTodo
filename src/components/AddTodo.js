import React, {Component} from 'react';

class AddTodo extends Component{

    state = {
        title: ''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    render(){
        return(
            <form style={{display: 'flex'}}>
                <input type="text" name="title" placeholder="Add Todo..." style={{ flex: '10', padding: '5px' }} 
                 value = { this.state.title } onChange={ this.onChange } />
                <input type='submit' style={{ flex: '1' }} value='Submit' className='btn' />
            </form>
        )
    }
}

export default AddTodo;