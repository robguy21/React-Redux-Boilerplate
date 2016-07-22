import App from './App.js';
import Counter from '../routes/Counter/CounterRoute.js';
import Page from '../routes/Page/PageRoute.js';
import Todo from '../routes/Todo/TodoRoute.js';
import Lost from '../routes/Lost/LostRoute.js';

const Routes = {
  path: '/',
  component: App,
  childRoutes: [
    Counter,
    Page,
    Todo,
    Lost,
  ],
};

export default Routes;
