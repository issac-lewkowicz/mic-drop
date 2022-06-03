//import { useState } from 'react';
import { Card as ListItem, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { borderColor, maxWidth, minHeight } from "@mui/system";

function Card({ card, onChangeCart, source, classes }) {
  const {
    name,
    brand,
    price,
    insturFam,
    condtion,
    rating,
    imageOne,
    imageTwo,
    imageThree,
    inCart,
  } = card;
  const handleClickCart = () => onChangeCart(card.id);
  const removeCartButton = inCart ? (
    <Button onClick={handleClickCart}>Remove from cart</Button>
  ) : null;
  const addCartButton = !inCart ? (
    <Button onClick={handleClickCart}>Add to cart</Button>
  ) : null;
  const cartButton = source === "cart" ? removeCartButton : addCartButton;
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100px'
    
  });
  return (
    <Grid item minHeight='250px' borderColor={'black'} >
        <Typography variant="subtitle1" component="div">{name}</Typography>
        <Link to={`/instruments/${card.id}`}>
          <Img src={imageOne} alt="item" />
        </Link>
        <p>{price}</p>
        <p>{condtion}</p>
        {cartButton}
    </Grid>
  );
}
export default Card;
