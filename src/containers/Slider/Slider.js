import React, { useEffect , useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { SliderCarouselOptions } from "../../utils/constants";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../utils/commonStyles.css";

const homePageData = require("../../utils/homepage.json");

export const Slider = (props) => {
  const [sliderImages, setSliderImages] = useState(null);

  useEffect (() => {
    // Fetch images for slider
    console.log('dxm, inside the hook')
    setSliderImages([...getSliderImages()]);
  }, []);

  const getSliderImages = () => {
    // console.log('dxm, homePageData 1st titles: ', homePageData.titles[0]);
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
    console.log("dxm, data loop count: ", count);
    // If no title found with moduleType as HERO
    return thumbnails;
  };

  const renderSliderImages = () => {
    const images = [
      "http://cp-img-cdn-lb.aws.playco.com/wb/GHOSTSOFGIRLFRIENDSPASTY2009M/GHOSTSOFGIRLFRIENDSPASTY2009M-1536x613-DMHE.jpg",
      "http://cp-img-cdn-lb.aws.playco.com/wb/LIFEASWEKNOWITY2010M/LIFEASWEKNOWITY2010M-1536x613-DMHE.jpg",
      "http://cp-img-cdn-lb.aws.playco.com/wb/CRAZYSTUPIDLOVEY2011M/CRAZYSTUPIDLOVEY2011M-1536x613-DMHE.jpg",
      "http://cp-img-cdn-lb.aws.playco.com/wb/YOUVEGOTMAILY1998M/YOUVEGOTMAILY1998M-1536x613-DMHE.jpg",
      "http://cp-img-cdn-lb.aws.playco.com/wb/MYBIGFATGREEKWEDDINGY2002M/MYBIGFATGREEKWEDDINGY2002M-1536x613-DMHE.jpg",
    ];
    // console.log('dxm, sliderImages: ', sliderImages);
    const finalImagesArray = [];
    console.log("dxm, render slides");
    if (Array.isArray(sliderImages) && sliderImages.length > 0) {
      sliderImages.map((img, index) => {
        finalImagesArray.push(
          <div className="item" key={index}>
            <img className="img" src={img} />
          </div>
        );
      });
    }
    // Placeholder, replace ...loading with suspense loader
    return finalImagesArray.length > 0 ? (
      finalImagesArray
    ) : (
      <div style={{ color: "#fff" }}>loading...</div>
    );
  };
  console.log("dxm, sliderImages:", sliderImages);
  // const slidesComponent= renderSliderImages();
  // console.log("dxm, slidesComponent:", slidesComponent);
  // console.log('dxm, slidesComponent isArray', Array.isArray(slidesComponent));
  return (
    <div style={{ height: 200 }}>
      <OwlCarousel className="owl-theme" {...SliderCarouselOptions}>
        {renderSliderImages()}
      </OwlCarousel>
    </div>
  );
};
