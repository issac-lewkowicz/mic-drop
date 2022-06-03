import React, { useEffect, useState } from "react";
import HeroItem from "./HeroItem";
import Carousel from 'react-material-ui-carousel'


function HeroCarousel() {
  const [heroArr, setHeroArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/hero")
      .then((r) => r.json())
      .then(setHeroArr);
  }, []);

  const heroDisplayItems = heroArr.map((hero) => {
    return <HeroItem key={hero.id} hero={hero} />;
  });

  return <Carousel   
            stopPLayOnHover={true}
            animation="slide"
            duration={500}
            interval={6500}
           >
            
              
              {heroDisplayItems}
              
          </Carousel>;







}

export default HeroCarousel;
