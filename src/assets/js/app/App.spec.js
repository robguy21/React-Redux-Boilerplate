import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import App from './App.js';

test('<App /> contains React Redux is fun!', assert => {
  const wrapper = shallow(<App />);

  const actual = wrapper.text();
  const expected = 'React Redux is Fun!<Header />';

  assert.equal(actual, expected, 'returns React Redux is fun and Header Comp');

  assert.end();
});
