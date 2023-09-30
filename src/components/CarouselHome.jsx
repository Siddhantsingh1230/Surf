import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Banner1 from "../assets/images/banner1.jpg";
import Banner2 from "../assets/images/banner2.jpeg";
import Banner3 from "../assets/images/banner3.jpg";
import Banner4 from "../assets/images/banner4.jpg";
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true ,dragFree: true }, [Autoplay({ delay: 5500 })]);
  const slides = [Banner3, Banner4 , Banner1, Banner2 ];
  const imageByIndex = (index) => slides[index % slides.length];
  return (
    <>
      <div className="embla cursor-grab">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img cursor-pointer"
                  src={imageByIndex(index)}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
