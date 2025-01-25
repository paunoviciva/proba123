import React, { useContext } from 'react';
import mojaSlika from './../../../../slicice/gurmanskaPljeskavica.png';
import { CartContext } from '../../context/CartContextProvider';

function Proizvod({ id, naziv, cena }) {
    const { cart, setCart } = useContext(CartContext);

    const isAddedToCart = cart.some(item => item.id === id);

    const handleCartAction = () => {
        if (isAddedToCart) {
            setCart(cart.filter(item => item.id !== id));
        } else {
            setCart([...cart, { id, naziv, cena, slika: mojaSlika }]);
        }
    };

    return (
        <div className={`proizvod ${isAddedToCart ? "dodato" : ""}`}>
            <img className='slika-proizvoda' src={mojaSlika} alt="slika gurmanske pljeskavice" height={150} />
            <p className='naziv-proizvoda'>{naziv}</p>
            <p className='cena-proizvoda'>{cena} rsd</p>
            <br />
            <button type='button' onClick={handleCartAction}>
                {isAddedToCart ? "Izbaci iz korpe" : "Dodaj u korpu"}
            </button>
        </div>
    );
}

export default Proizvod;
