import React from 'react'
import './HeaderText.css'

function HeaderText(props) {
  return (
    <div>
      <h2 className="headerTextTitle">{props.text}</h2>
    </div>
  )
}

export default HeaderText
