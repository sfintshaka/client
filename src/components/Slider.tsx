import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider: React.FC = () => {
    return (
      <Carousel showThumbs={false} autoPlay={true} interval={3000}>
       <div>
        <img src="./assets/union1.webp" alt="union" className="slider-image" />
      </div>
      <div>
        <img src="./assets/bed1.webp" alt="bed1" className="slider-image" />
      </div>
      <div>
        <img src="./assets/bed.webp" alt="bed" className="slider-image" />
      </div>
      <div>
        <img src="./assets/gym.webp" alt="gym" className="slider-image" />
      </div>
      <div>
        <img src="./assets/laund1.webp" alt="laund1" className="slider-image" />
      </div>
      <div>
        <img src="./assets/living.webp" alt="living" className="slider-image" />
      </div>
      <div>
        <img src="./assets/living1.webp" alt="living1" className="slider-image" />
      </div>
      <div>
        <img src="./assets/reception1.webp" alt="reception" className="slider-image" />
      </div>
      <div>
        <img src="./assets/sitting.webp" alt="sitting" className="slider-image" />
      </div>
      <div>
        <img src="./assets/sitting1.webp" alt="sitting" className="slider-image" />
      </div>
      <div>
        <img src="./assets/sitting2.webp" alt="sitting" className="slider-image" />
      </div>
      <div>
        <img src="./assets/study.webp" alt="sitting" className="slider-image" />
      </div>
      <div>
        <img src="./assets/study1.webp" alt="sitting" className="slider-image" />
      </div>
      <div>
        <img src="./assets/bath.webp" alt="sitting" className="slider-image" />
      </div>
      </Carousel>
    );
  };
  

export default Slider