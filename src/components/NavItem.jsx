import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavItem({url, link}) {
  return (
    // <li className="nav__item"><Link to={url}>{link}</Link></li>
    <Link to={url} > {link} </Link>
  )
}

export default NavItem
