import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Banner1 from "../assets/images/banner1.jpg";
import Banner2 from "../assets/images/banner2.jpeg";
import Banner3 from "../assets/images/banner3.jpg";
import Banner4 from "../assets/images/banner4.jpg";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const slides = [Banner1, Banner2, Banner3, Banner4];
  const imageByIndex = (index) => slides[index % slides.length];
  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img"
                  src={imageByIndex(index)}
                  alt="Your alt text"
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
