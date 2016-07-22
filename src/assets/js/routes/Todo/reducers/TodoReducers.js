import assign from 'object.assign';
import { combineReducers } from 'redux';

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../actions/TodoActions.js';

const todo = (state = [], { type, id, text, status = true }) => {
  switch (type) {
    case ADD_TODO:
      return state.concat({ id, text, status });

    case REMOVE_TODO:
      return [
        ...state.slice(0, id),
        ...state.slice(id + 1),
      ];

    case TOGGLE_TODO:
      return [
        ...state.slice(0, id),
        assign({}, state[id], {
          status: !state[id].status,
        }),
        ...state.slice(id + 1),
      ];

    default:
      return state;
  }
};

const TodoReducer = combineReducers({
  todo,
});

export default TodoReducer;
