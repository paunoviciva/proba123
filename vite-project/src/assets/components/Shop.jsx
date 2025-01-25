import React, { useContext } from "react";
import Proizvod from "./Proizvod";
import { CartContext } from "../../context/CartContextProvider";

const Shop = () => {
  const { cart } = useContext(CartContext);

  const proizvodi = [
    { id: 1, naziv: "Gurmanska pljeskavica", cena: 350 },
    { id: 2, naziv: "Gurmanska pljeskavica", cena: 350 },
    { id: 3, naziv: "Gurmanska pljeskavica", cena: 350 },
    { id: 4, naziv: "Gurmanska pljeskavica", cena: 350 },
    { id: 5, naziv: "Gurmanska pljeskavica", cena: 350 },
    { id: 6, naziv: "Gurmanska pljeskavica", cena: 350 },
  ];

  return (
    <>
    <div className="cart-icon">
        <p>Items in cart: {cart.length}</p>
      </div>
      <h3>Naši proizvodi:</h3>
      <div className="lista-proizvoda">
        {proizvodi.map((proizvod) => (
          <Proizvod key={proizvod.id} {...proizvod} />
        ))}
      </div>
    </>
  );
};

export default Shop;
