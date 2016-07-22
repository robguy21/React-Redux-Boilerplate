import test from 'tape';
import {reducerTest} from 'tape-redux';
 
import CounterReducer from './CounterReducers.js';
import * as CounterActions from '../actions/CounterActions.js';
 
test('CounterReducer with Action remove', reducerTest(
    CounterReducer,
    {counter: 0},
    CounterActions.add,
    {counter: 1},
    'add should increment the counter property by 1'
)); 

test('CounterReducer with Action remove', reducerTest(
    CounterReducer,
    {counter: 2},
    CounterActions.remove,
    {counter: 1},
    'remove should decrement the counter property by 1'
));