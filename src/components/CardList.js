import Card from './Card';
//import { Route, Switch } from "react-router-dom";


function CardList({ itemList, onAddToCart }) {

    const cards = itemList.map((card) => <Card key={card.id} card={card} onChangeCart={onAddToCart} source='items' />)

    return (
        <div>
            <ul id='CardList__Main'>
                {cards}
            </ul>
        </div>
    )
}

export default CardList