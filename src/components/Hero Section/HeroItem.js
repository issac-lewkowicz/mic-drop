import React from 'react'
import { Container, Card as ListItem } from '@mui/material'


function HeroItem({hero}){



return( 
    <ListItem
    sx={{width: '90vw',
        backgroundColor: '#FBEBD8',
        alignItems: 'center',
        borderRadius: 12,
        borderColor: "black",
        margin: 3
    }}
    >
            <h3 className='hero__title'>{hero.title}</h3>
            <p className='heroItem__body'>{hero.body}</p>
            <img className='heroItem__image' src={hero.image} alt='Sick Music Photos' />
     </ListItem>
)

}

export default HeroItem