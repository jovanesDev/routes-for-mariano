import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { productos } from "../constants/productos";
const DinamicPage = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProducto(productos.find((prod) => prod.id === id));
    }, 5000);
  });

  return (
    <>
      {!producto ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <h1>{producto.nombre}</h1>
          <p>{producto.id}</p>
        </div>
      )}
    </>
  );
};

export default DinamicPage;
