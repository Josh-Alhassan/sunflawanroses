import React from 'react';
import './Pagination.css';

function Pagination({vector, pageLabel}) {
  return (
    <div className='pagination'>
      <div className="vector">
        {vector}
      </div>
      <p className="pageLabel">{pageLabel}</p>
    </div>
  )
}

export default Pagination
