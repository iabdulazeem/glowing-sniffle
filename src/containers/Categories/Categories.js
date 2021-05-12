import React, { useState, useEffect } from "react";
import { Spinner } from "../../components/Spinner";
import { CategoriesWrap, SpinnerWrap } from "./Styled";
import { CategoryCarousel } from "../../components/CategoryCarousel";
import { CategoryTitle } from "../../components/CategoryTitle";

const homePageData = require("../../utils/homepage.json");

export const Categories = (props) => {
  const [categories, setCategories] = useState(getCategories());

  useEffect(() => {
    setCategories(getCategoriesWithSlides());
  }, []);

  return (
    <CategoriesWrap>
      {categories.map((item, index) => {
        return (
          <div key={index}>
            <CategoryTitle title={item.title} />
            {item.thumbnails && item.thumbnails.length > 0 ? (
              <CategoryCarousel slides={item.thumbnails} />
            ) : (
              <SpinnerWrap>
                <Spinner />
              </SpinnerWrap>
            )}
          </div>
        );
      })}
    </CategoriesWrap>
  );
};

const getCategories = () => {
  let categories = [];
  homePageData.titles.forEach((module) => {
    if (module?.moduleType !== "HERO") {
      categories.push({
        title: module.title,
        moduleId: module.moduleId,
        thumbnails: null,
      });
    }
  });
  return categories;
};

const getCategoriesWithSlides = () => {
  let categories = [];
  homePageData.titles.forEach((module) => {
    if (module?.moduleType !== "HERO") {
      const titlesForSlider = module.layoutTitles?.titles;
      let thumbnails = [];
      titlesForSlider.forEach((title) => {
        if (title?.thumbnails) {
          let url = title?.thumbnails["thumb-677x474"]?.url;
          if (url) {
            thumbnails.push(url);
          }
        }
      });
      categories.push({
        title: module.title,
        moduleId: module.moduleId,
        thumbnails: thumbnails,
      });
    }
  });
  return categories;
};
