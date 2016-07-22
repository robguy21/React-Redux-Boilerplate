import React from 'react';
import { Link } from 'react-router';
const Header = () => (
  <ul>
    <li><Link to="/">Go to App Component</Link></li>
    <li><Link to="counter">Go to Counter Route</Link></li>
    <li><Link to="page">Go to Page Route</Link></li>
    <li><Link to="todo">Go to Todo Route</Link></li>
    <li><Link to="abyss">Start your Adventure</Link></li>
  </ul>
);

export default Header;
