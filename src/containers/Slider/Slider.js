import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { SliderCarouselOptions } from "../../utils/constants";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../utils/commonStyles.css";

const homePageData = require("../../utils/homepage.json");

const getSliderImages = () => {
  let count = 0;
  let thumbnails = [];
  homePageData.titles.every((module) => {
    count += 1;
    if (module?.moduleType === "HERO") {
      const titlesForSlider = module.layoutTitles?.titles;
      titlesForSlider.every((title) => {
        if (title?.thumbnails) {
          let url = title?.thumbnails["thumb-613x1536"]?.url;
          if (url) {
            thumbnails.push(url);
            return thumbnails;
          }
        }
      });
    }
  });
  return thumbnails;
};

export const Slider = (props) => {
  const [sliderImages, setSliderImages] = useState(getSliderImages());

  const renderSliderImages = () => {
    if (Array.isArray(sliderImages) && sliderImages.length > 0) {
      return sliderImages.map((img, index) => {
        return (
          <div className="item" key={index}>
            <img className="img" src={img} />
          </div>
        );
      });
    }
  };
  return (
    <div>
      <OwlCarousel className="owl-theme" {...SliderCarouselOptions}>
        {renderSliderImages()}
      </OwlCarousel>
    </div>
  );
};
