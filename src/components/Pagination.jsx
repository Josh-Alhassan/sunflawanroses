import React from 'react';
import './Pagination.css';

function Pagination({vector, pageLabel}) {
  return (
    <div className='pagination'>
      <a className="vector" href='/'>
        {vector}
      </a>
      <p className="pageLabel">{pageLabel}</p>
    </div>
  )
}

export default Pagination
