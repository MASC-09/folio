import React from 'react';
import './Portfolio.css';
import Slider from 'react-slick';
import Header from '../Header/Header';


const Portfolio = () => {
    const images = [
        './20220123_072509.jpg',
        '../utilities/images/desktop-wallpaper-rosa-salazar-alita-battle-angel.jpg',
        '../utilities/images/desktop-wallpaper-zelda-engine-video-hyrule.jpg',
    ]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
        <Header />
        <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
            </div>
        ))}
        </Slider>
    </div>
  );
};

export default Portfolio;
