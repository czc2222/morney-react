import {Link} from 'react-router-dom';
import * as React from 'react';

function NoMatch() {
  return (
    <div>
      <h2>404此页面不存在</h2>
      <p>
        <Link to="/">回到首页</Link>
      </p>
    </div>
  );
}
export default NoMatch