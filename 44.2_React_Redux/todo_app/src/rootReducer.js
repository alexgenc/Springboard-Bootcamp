import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = { 
  todos: []
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos, { task: action.task, id: uuidv4() }
        ]
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default: 
      return state
  }
}

export default rootReducer;