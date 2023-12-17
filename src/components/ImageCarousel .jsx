import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Parallax } from "react-parallax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionSpeed, setTransitionSpeed] = useState(1000);
  const sliderRef = useRef(null);
  const [imageOpacity, setImageOpacity] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: transitionSpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  const handleSpeedChange = (newSpeed) => {
    setTransitionSpeed(newSpeed);
  };

  const handleOpacityToggle = () => {
    const newOpacity = imageOpacity === 1 ? 0.5 : 1; // Toggle between 1 and 0.5
    setImageOpacity(newOpacity);
  };

  return (
    <div className="main container ">
      {/* <h1 className=' mt-2'>BEST FOR TOURIST !</h1> */}

      <div className="w-100 d-flex ">
        <div style={{}} className="mt-4">
          <label htmlFor="speedControl">Transition Speed:</label>
          <input
            className="mt-2"
            type="range"
            id="speedControl"
            min={500}
            max={3000}
            step={500}
            value={transitionSpeed}
            onChange={(e) => handleSpeedChange(Number(e.target.value))}
          />
          <span>{transitionSpeed} ms</span>

          <button
            className="btn1 btn btn-secondary text-black p-1 ms-5 mb-3"
            onClick={handleOpacityToggle}
          >
            intencity
          </button>
        </div>
      </div>

      <div className="main" style={{ position: "relative" }}>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Parallax
                className="parallax-image"
                blur={{ min: -15, max: 15 }}
                bgImage={image}
                strength={-200}
                style={{ opacity: imageOpacity }}
              >
                <div style={{ height: "400px" }} />
              </Parallax>
            </div>
          ))}
        </Slider>
        <div
          style={{
            position: "absolute",
            top: "50%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
