//import { useState } from 'react'

function Card({ card, onChangeCart, source }) {

    const { name, brand, price, insturFam, condtion, rating, imageOne, imageTwo, imageThree, inCart } = card;

    const handleClickCart = () => onChangeCart(card.id);

    const removeCartButton = (inCart) ? <button onClick={handleClickCart}>Remove from cart</button> : null;
    const addCartButton = (!inCart) ? <button onClick={handleClickCart}>Add to cart</button> : null;
    const cartButton = (source === 'cart') ? removeCartButton : addCartButton;

    return (
        <li>
            <h3>{name}</h3>
            <img src={imageOne} alt='item' />
            <p>${price}</p>
            <p>{condtion}</p>
            {cartButton}
        </li>
    )
}

export default Card