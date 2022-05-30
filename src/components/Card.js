import React from 'react'

function Card({card}) {
    //const {name, image, price, condition} = card;
   const {name, brand, price, insturFam, condtion, rating, imageOne, imageTwo, imageThree } = card;
  return (
    <div>
        <h3>{name}</h3>
        <img src={imageOne} alt='sorry'/>
        <p>${price}</p>
        <p>{condtion}</p>
    </div>
  )
}

export default Card