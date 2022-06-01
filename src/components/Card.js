import { useState } from 'react';
import {Card as ListItem, Button} from '@mui/material';


function Card({ card, onChangeCart, source }) {

    const { name, brand, price, insturFam, condtion, rating, imageOne, imageTwo, imageThree, inCart } = card;

    const handleClickCart = () => onChangeCart(card.id);

    const removeCartButton = (inCart) ? <button onClick={handleClickCart}>Remove from cart</button> : null;
    const addCartButton = (!inCart) ? <button onClick={handleClickCart}>Add to cart</button> : null;
    const cartButton = (source === 'cart') ? removeCartButton : addCartButton;

    return (
        
        <li className='CardList__Container'>
            <ListItem className='CardList__Card'>
                <h3 id="CardList__Card__name">{name}</h3>
                <img id="CardList__Card__img" src={imageOne} alt='item' />
                <p id="CardList__Card__price">${price}</p>
                <p id="CardList__Card__condition">{condtion}</p>
                <Button onClick={handleClickCart}>{inCart ? 'Remove from Cart' : 'Add to Cart'}</Button>
            </ListItem>
        </li>
        
    )
}

export default Card