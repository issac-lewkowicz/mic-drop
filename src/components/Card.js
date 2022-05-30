import React from 'react'

function Card({card}) {
    //const {name, image, price, condition} = card;
   const {name, image, likes} = card;
  return (
    <div>
        <h3>{name}</h3>
        <img src={image} alt='sorry'/>
        <p>{likes}</p>
    </div>
  )
}

export default Card