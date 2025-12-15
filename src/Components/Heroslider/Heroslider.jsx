import React, { useState, useEffect } from "react";
import "./HeroSlider.css";
import hero1 from "../../assets/Hero/image1.png";
import hero2 from "../../assets/Hero/image2.png";
import hero3 from "../../assets/Hero/image3.png";

const images = [hero1, hero2, hero3];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="hero-slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        >
          {index === current && (
            <div className="hero-content">
              {/* <h1>Next-Gen Gaming Starts Here</h1> */}
              {/* <p>PlayStation • Gaming PC • Accessories</p> */}
              {/* <button>Shop Now</button> */}
            </div>
          )}
        </div>
      ))}

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default HeroSlider;
