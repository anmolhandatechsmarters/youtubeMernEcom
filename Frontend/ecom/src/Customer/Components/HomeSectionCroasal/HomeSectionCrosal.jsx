import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCrosal = ({data,Selectionname}) => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => carouselRef.current.slidePrev();
  const slideNext = () => carouselRef.current.slideNext();

  const items = data.splice(0,10).map((item) => <HomeSectionCard product={item}/>);

  return (
    <div className="relative px-4 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{Selectionname}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          infinite
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
        />

        {/* Next Button */}
   
        <Button
          onClick={slideNext}
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            backgroundColor: "white",
            color: "black",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>

        {/* Previous Button */}
        <Button
          onClick={slidePrev}
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "-3rem",
            transform: "translateX(50%) rotate(90deg)",
            backgroundColor: "white",
            color: "black",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCrosal;
