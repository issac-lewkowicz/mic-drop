import  Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { borderColor, maxWidth, minHeight } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from '@mui/icons-material/Delete';

function Card({ card, onChangeCart, source }) {
  const {
    name,
    price,
    condtion,
    imageOne,
    inCart,
  } = card;

  const handleClickCart = () => onChangeCart(card.id);

  const removeCartButton = inCart ? (
    <Button
      onClick={handleClickCart}
      variant="outlined"
      startIcon={<DeleteIcon />}
    >
      Remove from cart
    </Button>
  ) : null;
  const addCartButton = !inCart ? (
    <Button
      onClick={handleClickCart}
      variant="outlined"
      startIcon={<AddShoppingCartIcon />}
    >
      Add to cart
    </Button>
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
      <p id="CardList__Card__price">{price.toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</p>
      <p id="CardList__Card__condition">{condtion}</p>
      {cartButton}
    </Grid>
  );
}

export default Card;
