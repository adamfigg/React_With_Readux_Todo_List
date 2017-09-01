const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const FINISHED_TASK = 'FINISHED_TASK';

const initialState = {
    tasksToDo: [],
    tasksCompleted: []
};

export function addTask(task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function deleteTask(i) {
    return {
        type: DELETE_TASK,
        payload: i
    }
}

export function finishedTask(task) {
    return {
        type: FINISHED_TASK,
        payload: task
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return Object.assign({}, state, { tasksToDo: [...state.tasksToDo, action.payload] });
        case DELETE_TASK: 
            return Object.assign({}, state, { tasksToDo: state.tasksToDo.filter((task, i) => i !== action.payload) });
        // Finished task and Delete Task will both be used for the Completed task button click
        case FINISHED_TASK:
             return Object.assign({}, state, { tasksCompleted: [...state.tasksCompleted, action.payload] });
        default:
            return state;
    }
}