import Card from './Card';

function CardList({ itemList, onAddToCart }) {

    const cards = itemList.map((card) => <Card key={card.id} card={card} onChangeCart={onAddToCart} source='items' />)

    return (
        <div>
            <ul>
                {cards}
            </ul>
        </div>
    )
}

export default CardList