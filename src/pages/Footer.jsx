import React from 'react'

import './Footer.css'
import RealTimeClockLocation from '../components/RealTimeClockLocation'

function Footer() {
  return (
    <div className='footer__section'>

        <RealTimeClockLocation />

        <div className="socials__wrap">
        <nav>
          <ul className='footer__links'>
            <li><a href="#" target='_blank'>Send a mail ↗</a></li>
            <li><a href="#" target='_blank'>Phone ↗</a></li>
            <li><a href="#" target='_blank'>Instagram ↗</a></li>
            <li><a href="#" target='_blank'>LinkedIn ↗</a></li>
            <li><a href="#" target='_blank'>Twitter ↗</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Footer
