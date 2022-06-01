import React, { useEffect, useState } from "react";
import HeroItem from './HeroItem'

import Carousel from "nuka-carousel";

function HeroCarousel() {

const [heroArr, setHeroArr] = useState([])

useEffect(()=> {
    fetch('http://localhost:6001/hero')
    .then(r => r.json())
    .then(setHeroArr)
},[])

//console.log(heroArr)

const heroDisplayItems = heroArr.map(hero => {
return <HeroItem key={hero.id} hero={hero} />
})


    return (

        <div className ='heroCarousel'>
            
            <Carousel 
            wrapAround={true}
            slidesToShow={1}
            className="heroCarousel"
            >
            {heroDisplayItems}
            </Carousel>
        
        </div>

    )

}

export default HeroCarousel