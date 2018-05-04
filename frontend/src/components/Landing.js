import React from 'react';
import {
  Link
} from 'react-router-dom'

export default () => {
  return (
    <div>
      <ul>
        <li><Link to="/requirements">Requirements</Link></li>
        <li><Link to="/sources">Sources</Link></li>
      </ul>
    </div>
  );
}
