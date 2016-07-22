import React from 'react';
import Header from '../components/Header.js';

const { any } = React.PropTypes;

const App = ({ children }) => (
  <div>
    <h1>React Redux is Fun!</h1>
    <Header />
    {children}
  </div>
);

App.propTypes = {
  children: any,
};

export default App;
