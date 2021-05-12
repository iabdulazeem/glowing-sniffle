import React from "react";
import OwlCarousel from "react-owl-carousel";
import { CategoriesCarouselOptions } from "../utils/constants";
import { CategoryWrapper } from "./Styled";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../utils/commonStyles.css";

export const CategoryCarousel = (props) => {
  return (
    <CategoryWrapper>
      <OwlCarousel className="owl-theme" {...CategoriesCarouselOptions}>
        {props.slides.map((img, index) => {
          return (
            <div className="item" key={index}>
              <img className="img" src={img} />
            </div>
          );
        })}
      </OwlCarousel>
    </CategoryWrapper>
  );
};
