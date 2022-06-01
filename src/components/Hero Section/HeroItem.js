import React from 'react'
import { Container } from '@mui/system'


function HeroItem({hero}){



return( 
    <Container fixed>
            <h3 className='hero__title'>{hero.title}</h3>
            <p className='heroItem__body'>{hero.body}</p>
            <img className='heroItem__image' src={hero.image} alt='Sick Music Photos' />
     </Container>
)

}

export default HeroItem