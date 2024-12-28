import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; 
import mini from './images/movie 12.jpg'
import sini from './images/movie 13.jpg'
import gini from './images/movie 14.jpg'
import vini from './images/movie 15.jpg'
import { Link } from "react-router-dom";


const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow prev`} onClick={onClick}>
      <span>&lt;</span>
    </div>
  );
};


const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next`} onClick={onClick}>
      <span>&gt;</span>
    </div>
  );
};

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "250px", 
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "15px",
          slidesToShow: 1
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "15px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
    
   
 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Link to='/start'><img
            src={mini}
            alt="Slide 1"
          /></Link>
        </div>
        <div>
        <Link to='/end'><img
            src={sini}
            alt="Slide 2"
          /></Link>
        </div>
      <div>
      <Link to='/up'> <img
            src={gini}
            alt="Slide 3"
          /></Link>
        </div>
         <div>
        <Link to='/bottom'><img
            src={vini}
            alt="Slide 4"
          /></Link>
        </div> 
        
      </Slider>
    </div>
  );
}

export default CenterMode;




















