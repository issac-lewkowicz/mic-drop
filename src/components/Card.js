import Button from "@mui/material/Button";
import {Card as CardItem} from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import logo from './logo.svg';

function Card({ card, onChangeCart, source }) {
  const { name, price, condtion, imageOne = logo, inCart } = card;

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

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100px",
  });
  return (
    <Grid item minHeight="250px" borderColor={"black"}>
        <CardItem >
      <Typography variant="subtitle1" component="div">
        {name}
      </Typography>
      <Link to={`/instruments/${card.id}`}>
        <Img src={imageOne} alt="item" />
      </Link>
      <p id="CardList__Card__price">
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
      <p id="CardList__Card__condition">{condtion}</p>
      {cartButton}
      </CardItem>
    </Grid>
  );
}

export default Card;
