import React, { Component } from 'react';
import { finishedTask } from '../.././ducks/toDoList';
import { connect } from 'react-redux';

import './CompletedTasks.css';

var headerStyle = {
    color: 'red'
}

class CompletedTasks extends Component {
    render() {
        return (
            <div className={`${!this.props.toDoList.length ? 'none':null }`}>
                <h1 style={headerStyle}>Hey look, you actually finished something...</h1>
                {
                    this.props.toDoList.map((task, i) => {
                        return (
                            <h2 key={i}>Good job, you did {task}.</h2>
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        toDoList: state.tasksCompleted
    };
}

export default connect(mapStateToProps, { finishedTask })(CompletedTasks);