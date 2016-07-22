const PageRoute = {
  path: 'page',
  title: 'Page',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Page.js').default);
    });
  },
};

export default PageRoute;
