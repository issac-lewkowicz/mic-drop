import React from 'react'


function HeroItem({hero}){



return( 
    <div>
            <h3 className='hero__title'>{hero.title}</h3>
            <p className='heroItem__body'>{hero.body}</p>
            <img className='heroItem__image' src={hero.image} alt='Sick Music Photos' />
    </div>
)

}

export default HeroItem