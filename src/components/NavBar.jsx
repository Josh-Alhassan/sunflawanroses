import React from 'react'
import './NavBar.css';
import NavItem from './NavItem';
import { Link } from 'react-router-dom'
// import Booking from '../pages/Booking';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function NavBar() {
  return (
    <div className='nav__section'>
      <Link to='/'> <h3 className="logo" url='/' >Sunflawanroses</h3> </Link>

      <nav>
        <ul className="nav__items">
            <NavItem url='/photos' link='Photos' />
            <NavItem url='/film' link='Films' />
            <NavItem url='/shop' link='Shop' />
            <NavItem url='/bookings' link='Booking' />
        </ul>
      </nav> 
    </div>
  )
}

export default NavBar
