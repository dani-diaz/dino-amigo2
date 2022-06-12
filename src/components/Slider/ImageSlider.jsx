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
            <button className='left-arrow' onClick={prevSlide}><img className='left-arrow' src="https://i.imgur.com/rti6MJ8.png" /></button>
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
        <button className='right-arrow' onClick={nextSlide}><img src="https://i.imgur.com/w7coA5l.png" /></button>
      </div>
    </>
  );
};

export default ImageSlider;
