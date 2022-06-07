import React, { useState } from 'react';
import { SliderData } from '../../components/Slider/SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className='sliderbox'>
          <section className='slider'>
            {SliderData.map((slide, index) => {
              return (
                <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
                >
                  {index === current && (
                    <img src={slide.image} alt='travel image' className='image' />
                    )}
                </div>
              );
            })}
          </section>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      </div>
    </>
  );
};

export default ImageSlider;
