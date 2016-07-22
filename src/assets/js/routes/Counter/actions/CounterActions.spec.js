import test from 'tape';
import {actionTest} from 'tape-redux';
 
import * as CounterActions from './CounterActions.js';

test('Counter action add', actionTest(
    CounterActions.add.bind(null, 0),
    {
      integer: 0, 
      type: CounterActions.ADD
    },
    'add should have ADD as type and 0 as integer'
));

test('Counter action remove', actionTest(
    CounterActions.remove.bind(null, 0),
    {
      integer: 0, 
      type: CounterActions.REMOVE
    },
    'remove should have REMOVE as type and 1 as integer'
));