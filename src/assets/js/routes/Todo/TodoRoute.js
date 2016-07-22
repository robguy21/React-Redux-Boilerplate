const TodoRoute = {
  path: 'todo',
  title: 'Todo',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./TodoContainer.js').default);
    });
  },
};

export default TodoRoute;
