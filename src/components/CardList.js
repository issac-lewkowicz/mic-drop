import Card from './Card';

function CardList({ itemList }) {
    const cards = itemList.map((card) => <Card key={card.id} card={card} />)

    return (
        <div>
            <ul>
                {cards}
            </ul>
        </div>
    )
}

export default CardList