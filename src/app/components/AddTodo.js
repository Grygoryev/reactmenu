import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
        console.log(e.target.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.content} placeholder="Add new ToDo" />
            </form>
        )
    }
}

export default AddTodo