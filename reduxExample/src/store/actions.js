import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from './types';

export const addTask = (title, description) => {
    return {
        type: ADD_TASK,
        payload: {
            title,
            description,
        }
    }
}

export const completeTask = (id) => {
    return {
        type: COMPLETE_TASK,
        payload: {
            id
        }
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: {
            id
        }
    }
}