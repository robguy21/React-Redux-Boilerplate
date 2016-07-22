const PageRoute = {
  path: '*',
  title: 'Lost',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Lost.js').default);
    });
  },
};

export default PageRoute;
