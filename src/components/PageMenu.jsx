import React from 'react';
import './PageMenu.css';
import { Link } from 'react-router-dom';

function PageMenu({menu, pageUrl}) {
  return (
    <div>
      <Link className="menu" to={pageUrl}>{menu}</Link>
    </div>
  )
}

export default PageMenu
