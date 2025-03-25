import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeCrosalData from './MainCrosalData';

const items = HomeCrosalData.map((item, index) => (
    <img
        key={index}
        src={item.image}
        alt={`Slide ${index + 1}`}
        className="w-full h-[500px] object-cover"
    />
));

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={2000} 
        infinite
        disableButtonsControls
        disableDotsControls
    />
);

export default MainCarousel;
