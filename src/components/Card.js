import { useState } from 'react';
import {Card as ListItem, Button} from '@mui/material';

function Card({ card, onChangeCart }) {

    const { name, brand, price, insturFam, condtion, rating, imageOne, imageTwo, imageThree, inCart } = card;
    //const [buttonStatus, setButtonStatus] = useState(inCart ? 'Remove from Cart' : 'Add to Cart')

    const handleClickCart = () => {
        onChangeCart(card.id);
        //setButtonStatus(inCart ? 'Remove from Cart' : 'Add to Cart');
    }

    //const addToCart = inCart ? <button onClick={handleClickCart}>Remove from Cart</button> : <button onClick={handleClickCart}>Add to Cart</button>
    //const addToCart = inCart ? null : <button onClick={handleClickCart}>Add to Cart</button>
    //const removeFromCart = inCart ? <button onClick={handleClickCart}>Remove from Cart</button> : null;

    // function handleRenderButton() {
    //     if (inCart) return <button onClick={handleClickCart}>Remove from Cart</button>;
    //     else return <button onClick={handleClickCart}>Add to Cart</button>;
    // }

    //trying top make button render currectly. Hopfully can be fixed by adding routes. 
    // currently only updates when refreshed. goal is to have button dissapear when clicked to add to cart. 
    // then appear as remove from cart,  in the cart.

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