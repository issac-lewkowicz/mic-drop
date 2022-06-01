import Card from './Card';

function CardList({ itemList, onAddToCart }) {

    const cards = itemList.map((card) => <Card key={card.id} card={card} onChangeCart={onAddToCart}/>)

    return (
        <div>
            <ul id='CardList__Main'>
                {cards}
            </ul>
        </div>
    )
}

export default CardList