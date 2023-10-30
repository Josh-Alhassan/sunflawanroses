import React from 'react'
import './NavBar.css'

function NavItem({url, link}) {
  return (
    <li className="nav__item"><a href={url}>{link}</a></li>
  )
}

export default NavItem
