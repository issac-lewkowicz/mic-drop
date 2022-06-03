import React from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "./Card";
import Button from "@mui/material/Button";

function Checkout({ cartList, emptyCart }) {
  const history = useHistory();
  const cartCardList = cartList.map((card) => (
    <Card card={card} key={card.id} />
  ));

  const handlePayment = () => {
    alert("Thank you for your purchase! , Please come again!");
    emptyCart();
    history.push("/");
  };

  const priceList = cartList.map((card) => card.price);
  const sum = priceList.reduce((total, price) => total + price, 0);

  const total = (
    <div>
      <p>
        Sub total:{" "}
        {sum.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
      <p>
        Tax (15%):{" "}
        {(sum * 0.15).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <h3>
        Total:{" "}
        {(sum + sum * 0.15).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </h3>
    </div>
  );

  return (
    <div>
      <Link to={"/cart"}>
        <Button variant="outlined" sx={{ marginTop: 10 }}>
          {" "}
          ← Back to Cart{" "}
        </Button>
      </Link>
      <h1>Checkout</h1>
      <ul>{cartCardList}</ul>
      {total}
      <h4> Choose paytment type: </h4>
      <button onClick={handlePayment}> Credit/Debit Card </button>
      <button onClick={handlePayment}> Paypal </button>
      <button onClick={handlePayment}> Google Pay </button>
      <button onClick={handlePayment}> Apple Pay </button>
    </div>
  );
}

export default Checkout;
