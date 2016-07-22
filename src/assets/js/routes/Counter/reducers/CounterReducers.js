import { combineReducers } from 'redux';

import {
  ADD,
  REMOVE } from '../actions/CounterActions.js';

function counter(state = 0, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    case REMOVE:
      return state - 1;
    default:
      return state;
  }
}

const CounterReducer = combineReducers({
  counter,
});

export default CounterReducer;
