import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    id: 1,
    text: 'Humble man and pays attentino to every detail and perfects every cut before letting you off the chiar. Makes sure you are satisfied with the cut. Great quality cuts, very recommended.',
    name: 'Fernando',
  },
  {
    id: 2,
    text: 'Slide 2',
    name: 'Slide 2',
  },
  {
    id: 3,
    text: 'Slide 3',
    name: 'Slide 3',
  },
];

function CustomCarosel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === reviews.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? reviews.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = reviews.map((reviews) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={reviews.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <ReviewCard review={reviews} />
      </CarouselItem>
    );
  });

  return (
    <div className="my-4">
      <Carousel activeIndex={activeIndex} next={next} previous={previous} dark className="bg-light container">
        <CarouselIndicators
          items={reviews}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default CustomCarosel;