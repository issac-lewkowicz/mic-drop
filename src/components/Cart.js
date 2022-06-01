import React from 'react';
import Card from './Card';

function Cart({ onRemoveFromCart, cartList }) {
    const cartCardList = cartList.map((card) => <Card card={card} key={card.id} onChangeCart={onRemoveFromCart} source='cart' />);
    return (
        <div>
            <h1>Cart</h1>
            <ul>{cartCardList}</ul>
        </div>
    )
}

export default Cart