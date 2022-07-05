import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Carrito = () => {

    const navigate = useNavigate();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Carrito esta vacio </h1>
      <div
        style={{
          textAlign: "center",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
       <button 
       onClick={() => navigate('/')}
       style={{display:'flex',margin:'0 auto'}}>
         ir a la tienda
        </button>
      </div>
    </>
  );
};

export default Carrito;
