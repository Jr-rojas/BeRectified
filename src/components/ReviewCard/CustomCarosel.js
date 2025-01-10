import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    id: 1,
    text: 'Humble man and pays attentino to every detail and perfects every cut before letting you off the chiar. Makes sure you are satisfied with the cut. Great quality cuts, very recommended.',
    name: 'Fernando M.',
  },
  {
    id: 2,
    text: 'Best Barber in Bakersfield, Jose has SOOOO much patience with kids! My husband and kids always have a fresh cut! HIGHLY RECOMMEND!! 5 STARS ⭐⭐⭐⭐⭐',
    name: 'Clarissa C.',
  },
  {
    id: 3,
    text: 'Jose knows what his clients want and he goes above and beyond to make sure you are satisfied. He is passionate and truly knows what it takes to be a barber. 10/10',
    name: 'Brandon T.',
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
      <Carousel activeIndex={activeIndex} next={next} previous={previous} className="bg-secondary shadow container">
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