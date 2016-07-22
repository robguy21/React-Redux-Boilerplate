import React from 'react';

const { string, func, bool } = React.PropTypes;

const Todo = ({ text, status, destroy, toggle }) => (
  <li>
    {text} | {status ? 'true' : 'false'} <button onClick={destroy}>(Remove)</button>
    <button onClick={toggle}>(Toggle)</button>
  </li>
);

Todo.propTypes = {
  text: string,
  destroy: func,
  toggle: func,
  status: bool,
};


export default Todo;
