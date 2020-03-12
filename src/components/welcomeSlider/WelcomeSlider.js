import React from 'react';
import { Carousel } from 'react-bootstrap';
import './WelcomeSlider.css';

const WelcomeSlider = () => {
    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Save learning resources.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Create your own subjects.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Track your progress.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default WelcomeSlider;
