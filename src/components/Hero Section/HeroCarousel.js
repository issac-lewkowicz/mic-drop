import React, { useEffect, useState } from "react";
import HeroItem from "./HeroItem";

import Carousel from "nuka-carousel";
import { Container } from "@mui/system";

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

  return <div className="heroCarousel">{heroDisplayItems}</div>;
}

export default HeroCarousel;
