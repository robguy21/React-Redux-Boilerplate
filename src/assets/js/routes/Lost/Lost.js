import React from 'react';
import { Link } from 'react-router';

const Lost = () => (
  <div>
    <h2>Welcome to Lostness</h2>
    <p>
      Snapadoodle you seem to be in the wrong part of the woods, better turn back...
      <br />
      <Link to="/">Turn back</Link>
    </p>
  </div>
);

export default Lost;
