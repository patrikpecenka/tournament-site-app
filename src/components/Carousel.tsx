import { useState, useEffect, FunctionComponent } from 'react';
import 'styles/Carousel.css';

interface CarouselProps {
  images: string[];
}

const CarouselTest: FunctionComponent<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  let interval: number | null = null;

  useEffect(() => {
    const advanceCarousel = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    if (!isHovered) {
      interval = setInterval(advanceCarousel, 8000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [images.length, isHovered]);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getPrevIndex = (currentIndex: number): number => {
    if (currentIndex === 0) {
      return images.length - 1;
    }
    return currentIndex - 1;
  };

  const getNextIndex = (currentIndex: number): number => {
    if (currentIndex === images.length - 1) {
      return 0;
    }
    return currentIndex + 1;
  };



  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-item prev">
          <img src={images[getPrevIndex(activeIndex)]} alt="Previous Slide" />
        </div>
        <div 
          className="carousel-item active"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={images[activeIndex]} alt="Active Slide" />
        </div>
        <div className="carousel-item next">
          <img src={images[getNextIndex(activeIndex)]} alt="Next Slide" />
        </div>
      </div>
    </div>
  );
};


export default CarouselTest;