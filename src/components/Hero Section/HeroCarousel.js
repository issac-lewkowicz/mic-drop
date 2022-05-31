import React, { useEffect, useState } from "react";
import HeroItem from './HeroItem'

function HeroCarousel() {

const [heroArr, setHeroArr] = useState([])

useEffect(()=> {
    fetch('http://localhost:6001/hero')
    .then(r => r.json())
    .then(setHeroArr)
},[])

console.log(heroArr)

const heroDisplayItems = heroArr.map(hero => {
return <HeroItem key={hero.id} hero={hero} />
})


    return (

        <div className="HeroCarousel">

            <div>{heroDisplayItems}</div>

        </div>

    )

}

export default HeroCarousel