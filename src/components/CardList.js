import Card from './Card';
//import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid'

function CardList({ itemList, onAddToCart }) {
    
const cards = itemList.map((card) => <Card key={card.id} card={card} onChangeCart={onAddToCart} source='items' />)
    return (
        <Grid container spacing={2}>
                 {cards}
         </Grid>
    )
}
export default CardList