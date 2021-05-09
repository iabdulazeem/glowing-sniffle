import React from "react";
import OwlCarousel from "react-owl-carousel";
import {CategoriesCarouselOptions} from '../../utils/constants';
import {CategoriesWrap} from './Styled';
import {CategoryTitle} from '../../components/CategoryTitle';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../utils/commonStyles.css";

const image2="http://cp-img-cdn-lb.aws.playco.com/nehrgharfilms/LAALKABOOTARY2019M/LAALKABOOTARY2019M-474x677-PST.jpg";

export const Categories = (props) => {
  return (
      <CategoriesWrap>
        <CategoryTitle title="Ramadan TV Shows"/>
        <OwlCarousel className='owl-theme' {...CategoriesCarouselOptions}>
        <div className="item">
            <img
              className="img"
              src={image2}
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={image2}
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/FOX/THEWALKINGDEADY2010S09E001/THEWALKINGDEADY2010S09E001-474x677-PST.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/FOX/THEWALKINGDEADY2010S09E001/THEWALKINGDEADY2010S09E001-474x677-PST.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/FOX/THEWALKINGDEADY2010S09E001/THEWALKINGDEADY2010S09E001-474x677-PST.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/FOX/THEWALKINGDEADY2010S09E001/THEWALKINGDEADY2010S09E001-474x677-PST.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/FOX/THEWALKINGDEADY2010S09E001/THEWALKINGDEADY2010S09E001-474x677-PST.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/FOX/THEWALKINGDEADY2010S09E001/THEWALKINGDEADY2010S09E001-474x677-PST.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/FOX/THEWALKINGDEADY2010S09E001/THEWALKINGDEADY2010S09E001-474x677-PST.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/FOX/THEWALKINGDEADY2010S09E001/THEWALKINGDEADY2010S09E001-474x677-PST.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/FOX/THEWALKINGDEADY2010S09E001/THEWALKINGDEADY2010S09E001-474x677-PST.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/FOX/THEWALKINGDEADY2010S09E001/THEWALKINGDEADY2010S09E001-474x677-PST.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={image2}
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={image2}
            />
          </div>
        </OwlCarousel>
      </CategoriesWrap>
  );
};
