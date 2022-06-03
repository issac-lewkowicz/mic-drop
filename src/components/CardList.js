import Card from "./Card";
import Grid from "@mui/material/Grid";

function CardList({ itemList, onAddToCart }) {
  const cards = itemList.map((card) => (
    <Card key={card.id} card={card} onChangeCart={onAddToCart} source="items" />
  ));
  return (
    <Grid
      container
      spacing={4}
      alignItems="bottom"
      justifyContent="space-evenly"
      padding="30px"
    >
      {cards}
    </Grid>
  );
}
export default CardList;
