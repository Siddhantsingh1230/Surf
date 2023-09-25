import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const slides = [
    "https://picsum.photos/203/320?grayscale",
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/210/300?grayscale",
    "https://picsum.photos/230/310?grayscale",
  ];
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
