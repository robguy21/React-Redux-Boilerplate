import test from 'tape';
import { reducerTest } from 'tape-redux';

import TodoReducer from './TodoReducers.js';
import * as TodoActions from '../actions/TodoActions.js';

test('TodoReducer with Action ADD_TODO', reducerTest(
  TodoReducer,
  {
    todo: [],
  },
  TodoActions.addTodo.bind(null, 'lorem'),
  {
    todo: [
      {
        id: 1,
        status: true,
        text: 'lorem',
      },
    ],
  },
  'ADD_TODO should add a todo to the todo prop'
));

test('TodoReducer with action REMOVE_TODO', reducerTest(
  TodoReducer,
  {
    todo: [
      {
        id: 1,
        status: true,
        text: 'lorem',
      },
    ],
  },
  TodoActions.removeTodo.bind(null, 0),
  {
    todo: [],
  },
  'REMOVE_TODO should remove a todo'
));

test('TodoReducer with action TOGGLE_TODO', reducerTest(
  TodoReducer,
  {
    todo: [
      {
        id: 0,
        status: true,
        text: 'lorem',
      },
    ],
  },
  TodoActions.toggleTodo.bind(null, 0),
  {
    todo: [
      {
        id: 0,
        status: false,
        text: 'lorem',
      },
    ],
  },
  'TOGGLE_TODO should changed the prop status to not what it was before'
));
