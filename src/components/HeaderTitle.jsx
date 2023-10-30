import React from 'react'
import HeaderText from './HeaderText'

import './HeaderTitle.css'

function HeaderTitle() {
  return (
    <div className="headerTitle">
      <HeaderText text="PHOTOS" /> 
      <HeaderText text="See all" />
    </div>
  )
}

export default HeaderTitle
