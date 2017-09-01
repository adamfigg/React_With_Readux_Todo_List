import React, { Component } from 'react';
import { deleteTask, finishedTask } from '../.././ducks/toDoList';
import { connect } from 'react-redux';

var headerStyle = {
    color: 'red'
}

class Tasks extends Component {
    render() {
        return (
            <div>
                <h1 style={headerStyle}>This is what you still need to do you lazy crap...</h1>

                {
                    this.props.toDoList.map((task, i) => {
                        return (
                            <div className="TasksDisplay" key={i}>
                                <h2>{task}</h2>
                                <button onClick={() => {
                                    this.props.deleteTask(i);
                                    this.props.finishedTask(task);
                                }}>task completed</button>
                                <button onClick={() => this.props.deleteTask(i)}>too difficult</button>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        toDoList: state.tasksToDo
    };
}

export default connect(mapStateToProps, { deleteTask, finishedTask })(Tasks);