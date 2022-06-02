import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';

function CardDetails({ onAddToCart, onRemoveFromCart }) {
    const [card, setCard] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    let { id } = useParams()


    useEffect(() => {
        fetch(`http://localhost:6001/items/${id}`)
            .then(res => res.json())
            .then(resCard => {
                setCard(resCard)
                setIsLoaded(true);
            })
    })

    if (!isLoaded) return <h1>Loading...</h1>;

    const { name, brand, instruFam, rating, price, condition, imageOne, imageTwo, imageThree, inCart } = card;

    function handleClickCart() {
       inCart ? onRemoveFromCart(card.id) : onAddToCart(card.id);
    }
    const removeCartButton = (inCart) ? <Button onClick={handleClickCart}>Remove from cart</Button> : null;
    const addCartButton = (!inCart) ? <Button onClick={handleClickCart}>Add to cart</Button> : null;
    const cartButton = (inCart) ? removeCartButton : addCartButton;

    return (
        <div>
            <div className="info">
                <h3>{name}</h3>
                <p>{'Brand: ' + brand}</p>
                <p>{instruFam}</p>
                <p>{'Rating: ' + rating}</p>
                <p>{'Condition: ' + condition}</p>
                <p>{'Price: ' + price}</p>
                {cartButton}
            </div>
        </div>
    )
}

export default CardDetails