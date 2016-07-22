import React from 'react';

import Todo from './Todo.js';

const { array, object } = React.PropTypes;

const TodoList = ({ list, actions }) => (
  <ul>
    {list.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        destroy={function destroy() { actions.removeTodo(todo.id); }}
        toggle={function toggle() { actions.toggleTodo(todo.id); }}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  list: array,
  actions: object,
};

export default TodoList;
