import React from 'react'
import { productos } from '../constants/productos'
import { Link } from "react-router-dom";

const PageUno = () => {
  return (
    <>
    <h1 style={{textAlign:'center'}}>PageUno</h1>
      {productos.map(({nombre,id},index) => (
        <div key={id}>
          <h3>{nombre}</h3>
          <Link to={`/dinamic-page/${id}`}>Ver Mas</Link>
        </div>
      ))}
    </>
  )
}

export default PageUno