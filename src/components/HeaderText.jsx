import React from 'react'
import './HeaderText.css'
import { NavLink } from 'react-router-dom'

function HeaderText(props) {
  return (
    <div>
      <NavLink to={props.link}><h2 className="headerTextTitle">{props.text}</h2> </NavLink>
    </div>
  )
}

export default HeaderText
