import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
//import Img from "@mui/material/Img";
import { styled } from '@mui/material/styles';


function CardDetails({ onAddToCart, onRemoveFromCart }) {
  const [card, setCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedImage, setDisplayedImage] = useState('')
  let { id } = useParams();

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '50vw',
    maxHeight: '50vh',
  });


  useEffect(() => {
    fetch(`http://localhost:6001/items/${id}`)
      .then((res) => res.json())
      .then((resCard) => {
        setCard(resCard);
        setIsLoaded(true);
        setDisplayedImage(resCard.imageOne);
      });
  }, [id]);

  

  if (!isLoaded) return <h1>Loading...</h1>;

  const {
    name,
    brand,
    instruFam,
    rating,
    price,
    condition,
    imageOne,
    imageTwo,
    imageThree,
    inCart,
  } = card;

  

  function handleClickCart() {
    inCart ? onRemoveFromCart(card.id) : onAddToCart(card.id);
    setCard({ ...card, inCart: !inCart });
  }

  const handleHoveredCard = (image) => setDisplayedImage(image);

  const cartButton = inCart ? (
    <Button onClick={handleClickCart}>Remove from cart</Button>
  ) : (
    <Button onClick={handleClickCart}>Add to cart</Button>
  );

  return (
    <div className="details__container">
      <nav className="details__container__navbar">
        <ul>
          <li onMouseEnter={() => handleHoveredCard(imageOne)}>
            <Card className="details__container__navbar__card" id="nav__img1">
              <img src={imageOne} alt="img1" />
            </Card>
          </li>
          <li onMouseEnter={() => handleHoveredCard(imageTwo)}>
            <Card className="details__container__navbar__card" id="nav__img2">
              <img src={imageTwo} alt="img2" />
            </Card>
          </li>
          <li onMouseEnter={() => handleHoveredCard(imageThree)}>
            <Card className="details__container__navbar__card" id="nav__img3">
              <img src={imageThree} alt="img3" />
            </Card>
          </li>
        </ul>
      </nav>
      <div className="details__container__image__display"><Img src={displayedImage} alt='Displayed img'/></div>
      <div className="info">
        <h3>{name}</h3>
        <p>{"Brand: " + brand}</p>
        <p>{instruFam}</p>
        <p>{"Rating: " + rating}</p>
        <p>{"Condition: " + condition}</p>
        <p>{"Price: " + price}</p>
        {cartButton}
      </div>
    </div>
  );
}

export default CardDetails;
