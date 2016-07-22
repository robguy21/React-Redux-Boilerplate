import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from './actions/TodoActions.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

const { object } = React.PropTypes;

const Todo = ({ todoList, actions }) => (
  <div>
    <h2> My Todo App </h2>
    <TodoForm formAction={actions.addTodo} />
    <TodoList list={todoList.todo} actions={actions} />
    <br />
  </div>
);

Todo.propTypes = {
  actions: object,
  todoList: object,
};

const mapStateToProps = (state) => (
  { todoList: state.TodoReducer }
);

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(TodoActions, dispatch),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
