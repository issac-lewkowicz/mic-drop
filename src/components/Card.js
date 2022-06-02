//import { useState } from 'react';
import {Card as ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Card({ card, onChangeCart, source }) {

    const { name, brand, price, insturFam, condtion, rating, imageOne, imageTwo, imageThree, inCart } = card;

    const handleClickCart = () => onChangeCart(card.id);

    const removeCartButton = (inCart) ? <Button onClick={handleClickCart}>Remove from cart</Button> : null;
    const addCartButton = (!inCart) ? <Button onClick={handleClickCart}>Add to cart</Button> : null;
    const cartButton = (source === 'cart') ? removeCartButton : addCartButton;

    return (
        
        <li className='CardList__Container'>
            <ListItem className='CardList__Card'>
                <h3 id="CardList__Card__name">{name}</h3>
                <Link to={`/instruments/${card.id}`}><img id="CardList__Card__img" src={imageOne} alt='item' /></Link>
                <p id="CardList__Card__price">${price}</p>
                <p id="CardList__Card__condition">{condtion}</p>
                {cartButton}
            </ListItem>
        </li>
        
    )
}

export default Card