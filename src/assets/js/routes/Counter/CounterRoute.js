const HomeRoute = {
  path: 'counter',
  title: 'Counter',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./CounterContainer.js').default);
    });
  },
};

export default HomeRoute;
