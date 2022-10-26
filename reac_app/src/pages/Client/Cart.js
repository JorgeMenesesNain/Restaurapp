import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { size } from "lodash";
import { useProduct } from "../../hooks";
import { getProductsCart } from "../../api/cart";

export function Cart() {
  const [products, setProducts] = useState(null);
  const { getProductById } = useProduct();
  const { tableNumber } = useParams();

  useEffect(() => {
    (async () => {
      const idProductsCart = getProductsCart();

      const productsArray = [];
      for await (const idProduct of idProductsCart) {
        const response = await getProductById(idProduct);
        productsArray.push(response);
      }
      setProducts(productsArray);
    })();
  }, []);

  return (
    <div>
      <h1>Carrito</h1>
      {!products ? (
        <p>Cargando...</p>
      ) : size(products) === 0 ? (
        <div style={{ textAlign: "center" }}>
          <p>Tu carrito esta vacio</p>
          <Link to={`/client/${tableNumber}/orders`}>
            <Button primary>Ver pedidos</Button>
          </Link>
        </div>
      ) : (
        <p>Lista de productos</p>
      )}
    </div>
  );
}
