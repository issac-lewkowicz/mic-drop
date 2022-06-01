import { useState } from 'react'

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
        <li>
            <h3>{name}</h3>
            <img src={imageOne} alt='item' />
            <p>${price}</p>
            <p>{condtion}</p>
            <button onClick={handleClickCart}>{inCart ? 'Remove from Cart' : 'Add to Cart'}</button>
        </li>
    )
}

export default Card