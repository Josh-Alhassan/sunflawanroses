import React from 'react'
import HeaderText from '../components/HeaderText'
import MovieWheel from '../assets/MovieWheel'
import './Shop.css'

import filmImage from '../assets/film.jfif'

function Film() {
  return (
    <div className="film" id='film'>
        <div className="header__titles">
            <HeaderText text="FILMS" />
            <HeaderText text="See All" />
        </div>

        <div className="shop__img-card">
            <img className='shop__img' src={filmImage} alt="Movie Scene" />

            <div className="shop__film-content">
                <MovieWheel />
                <p className="shop__coming-soon">Coming Soon!</p>
            </div>
        </div>
    </div>
  )
}

export default Film
