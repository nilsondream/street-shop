import React from 'react'
import { Link } from 'react-router-dom'
import { StyledPageNotFound } from '../styles'

const PageNotFound = () => {
  return (
    <StyledPageNotFound>
        <h1>404</h1>
        <Link to="/"><button>Volver al Inicio</button></Link>
    </StyledPageNotFound>
  )
}

export default PageNotFound