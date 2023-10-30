import React from 'react'
import HeaderText from '../components/HeaderText'
import './Shop.css'

import shopImage from '../assets/shop.jfif'
import ShopCart from '../assets/ShopCart'

function Shop() {
  return (
    <div className='shop__wrapper' id='shop'>
        <div className="header__titles">
            <HeaderText text="SHOP" />
            <HeaderText text="Explore" />
        </div>

        <div className="shop__img-card">
            <img className='shop__img' src={shopImage} alt="Movie Scene" />

            <div className="shop__film-content">
                <ShopCart className="shop-cart" />
                <p className="shop__coming-soon">Coming Soon!</p>
            </div>
        </div>
    </div>
  )
}

export default Shop