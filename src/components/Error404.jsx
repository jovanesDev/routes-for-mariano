import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  // const goHome = () => navigate('/')

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Error404</h1>
      <button 
      onClick={() => navigate('/')}
      style={{ display: "flex", margin: "0 auto" }}>
        Ir al Inicio
      </button>
    </>
  );
};

export default Error404;
