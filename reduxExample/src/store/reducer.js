import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK} from './types';

const initialState = {
    tasks: []
};

let lastId = 1;

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            {
                const newState = {
                    ...state,
                    tasks: [
                        ...state.tasks,
                        {
                            id: lastId++,
                            title: action.payload.title,
                            description: action.payload.description,
                            completed: false
                        }
                    ]
                }
                return newState;
            }

        case COMPLETE_TASK: 
            {
                const index = state.tasks.findIndex(task => task.id == action.payload.id);
                let tasks = [...state.tasks];
                tasks[index].completed = true;
                console.log('tasks', tasks);
                const newState = {
                    ...state,
                    tasks
                }
                return newState;
            }

        case REMOVE_TASK:
            {
                const newState = {
                    ...state,
                    tasks: [
                        ...state.tasks.filter((task) => task.id !== action.payload.id)
                    ]
                }
                return newState;
            }

        default:
            return state;
    }
};

export default tasksReducer;