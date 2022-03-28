import React from 'react'
import img from '../images/hero-image.jpg'
import { ProductNew } from '../components'
import { StyledHome } from '../styles'

const Home = () => {
  return (
    <StyledHome>
      <div className="hero">
        <span/>
        <img src={img} alt="imghome" />
        <div className="hero-data">
          <h6>Bienvenido a</h6>
          <h1>Street Shop</h1>
          <p>
            ¡APROVECHA! Envío gratis a nivel nacional por compras mayores a 200 soles.<br/>
            ¡Quédate en casa y sigue comprando con tranquilidad!
          </p>
        </div>
      </div>
      <div className="hero-title">
        <div className="title-top">
          <h1>Nuevos</h1>
          <span />
        </div>
        <div className="title-bottom">
          <h1>Lanzamientos</h1>
        </div>
      </div>

      <ProductNew />

    </StyledHome>
  )
}

export default Home