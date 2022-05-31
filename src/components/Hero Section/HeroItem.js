import React from 'react'


function HeroItem({hero}){



return( 
    <div >
            <h3>{hero.title}</h3>
            <p>{hero.body}</p>
            <img src={hero.image} alt='Sick Music Photos' />
    </div>
)

}

export default HeroItem