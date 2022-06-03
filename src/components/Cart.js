import React from 'react';
import Card from './Card';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Cart({ onRemoveFromCart, cartList }) {
    const cartCardList = cartList.map((card) => <Card card={card} key={card.id} onChangeCart={onRemoveFromCart} source='cart' />);

    return (
        <div>
            <h1>Cart</h1>
            <ul>{cartCardList}</ul>
            <Link to={'/checkout'}><Button variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}> Checkout </Button></Link>
        </div>
    )
}

export default Cart