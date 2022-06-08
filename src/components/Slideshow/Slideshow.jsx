import React, { useState, useRef, useEffect } from "react";
import "./Slideshow.css";
import { images } from '../../components/Slideshow/SlideshowData';


const delay = 2500;

function Slideshow() {
const [index, setIndex] = useState(0);
const timeoutRef = useRef(null);

function resetTimeout() {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }
}

useEffect(() => {
resetTimeout();
  timeoutRef.current = setTimeout(
    () =>
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      ),
    delay
  );
    
  return () => {
      resetTimeout();
  };
}, [index]);
    
return (
  <div className="show1">
      <div className="Slider1"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((backgroundImage, index) => (
          <img className="slide1" key={index} style={{
            background: `url(${images.backgroundImage}) no-repeat center center` }} />
        ))}
      </div>
      <div className="Dots">
          {images.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}onClick={() => {
              setIndex(idx);
            }}
            ></div>
          ))}
      </div>
  </div>
);
};

export default Slideshow;