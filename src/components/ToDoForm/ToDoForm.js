import React, { Component } from 'react';
import { addTask } from '../.././ducks/toDoList';
import { connect } from 'react-redux';

var headerStyle = {
    color: 'red'
}

class ToDoForm extends Component {

 constructor() {
    super();
    this.state = {
        inputValue: ''
    }

 }
    render() {
        return (
            <div>
                <h1 style={headerStyle}>Why don't you add something to your TODO list?</h1>
                <form>
                    <input onChange={(e)=> this.setState({ inputValue: e.target.value })} value={this.state.inputValue} placeholder="What needs doing?"></input>
                    <button onClick={(e)=> { e.preventDefault();
                         if (this.state.inputValue) {
                        this.props.addTask(this.state.inputValue)
                        this.setState({
                            inputValue:""
                        })
                        }}}>add to my list</button>
                </form>
            </div>
        )
    }
}


export default connect(null, { addTask })(ToDoForm);