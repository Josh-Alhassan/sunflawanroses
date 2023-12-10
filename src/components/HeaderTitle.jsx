import React from 'react'
import HeaderText from './HeaderText';

// import { NavLink } from 'react-router-dom';

import './HeaderTitle.css'

function HeaderTitle() {
  return (
    <div className="headerTitle">
      <HeaderText text="PHOTOS" /> 
      <HeaderText text="See all" link="photos" />
    </div>
  )
}

export default HeaderTitle
