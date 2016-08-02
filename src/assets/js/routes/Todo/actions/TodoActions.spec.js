import test from 'tape';
import { actionTest } from 'tape-redux';

import * as TodoActions from './TodoActions.js';

test('Todo action ADD_TODO', actionTest(
  TodoActions.addTodo.bind(null, 'lorem'),
  {
    type: TodoActions.ADD_TODO,
    id: 0,
    text: 'lorem',
  },
  'addTodo should have ADD_TODO as type, 0 as id and lorem as text'
));

test('Todo action REMOVE_TODO', actionTest(
  TodoActions.removeTodo.bind(null, 0),
  {
    id: 0,
    type: TodoActions.REMOVE_TODO,
  },
  'removeTodo should have REMOVE_TODO as type, and 0 as id'
));

test('Todo action TOGGLE_TODO', actionTest(
  TodoActions.toggleTodo.bind(null, 0),
  {
    id: 0,
    type: TodoActions.TOGGLE_TODO,
  },
  'toggleTodo should have TOGGLE_TODO as type, and 0 as id'
));
