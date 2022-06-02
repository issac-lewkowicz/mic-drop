import React from 'react'
import { Paper, Button} from '@mui/material'


function HeroItem({hero}){



return( 
    <Paper
    
    sx={{width: '100vw',
        height: '30vh',
        backgroundColor: '#FBEBD8',
        alignItems: 'center'    
    }}
    >       <div className='heroItem_textContainer'>
                <h3 className='hero__title'>{hero.title.toUpperCase()}</h3>
                <p className='heroItem__body'>{hero.body}</p>
            </div>

            <img className='heroItem__image' src={hero.image} alt='Sick Music Photos' />
   
     </Paper>
)

}

export default HeroItem