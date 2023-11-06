import React from 'react'
import './PageLabel.css'

function PageLabel({pageTitle}) {
  return (
    <div>
      <h3 className="pageTitle">{pageTitle}</h3>
    </div>
  )
}

export default PageLabel
