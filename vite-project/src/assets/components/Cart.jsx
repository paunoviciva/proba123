import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const povecajKolicinu = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id 
          ? { ...item, kolicina: item.kolicina + 1 } 
          : item
    );
    setCart(updatedCart);
  };

  const smanjiKolicinu = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        if (item.kolicina > 1) {
          return { ...item, kolicina: item.kolicina - 1 };
        } else {
          return null;
        }
      }
      return item;
    }).filter(item => item !== null);

    setCart(updatedCart);
  };

  const isprazniKorpu = () => {
      setCart([]);
  };

  return (
    <div className="cart-wrapper">
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <>
          <button className="empty-cart-button" onClick={isprazniKorpu}>Isprazni korpu</button>
          {cart.map((item, idx) => (
            <div key={idx} className="item-cart">
              <img src={item.slika} alt={item.naziv} height={100} />
              <div className="item-info">
                <h3>{item.naziv}</h3>
                <p>{item.cena} rsd</p>
              </div>
              <div className="item-quantity">
                <button onClick={() => povecajKolicinu(item.id)}>+</button>
                <p>{item.kolicina}</p>
                <button onClick={() => smanjiKolicinu(item.id)}>-</button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="item-cart">
          <h3>Your cart is empty</h3>
        </div>
        )}
    </div>
  );
};

export default Cart;
