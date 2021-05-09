import React from "react";
import OwlCarousel from "react-owl-carousel";
import {SliderCarouselOptions} from '../../utils/constants';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../utils/commonStyles.css";

export const Slider = (props) => {
  return (
      <div style={{height:200}}>
        <OwlCarousel className='owl-theme' {...SliderCarouselOptions}>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/wb/GHOSTSOFGIRLFRIENDSPASTY2009M/GHOSTSOFGIRLFRIENDSPASTY2009M-1536x613-DMHE.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/wb/LIFEASWEKNOWITY2010M/LIFEASWEKNOWITY2010M-1536x613-DMHE.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/wb/CRAZYSTUPIDLOVEY2011M/CRAZYSTUPIDLOVEY2011M-1536x613-DMHE.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/wb/YOUVEGOTMAILY1998M/YOUVEGOTMAILY1998M-1536x613-DMHE.jpg"
              }
            />
          </div>
          <div className="item">
            <img
              className="img"
              src={
                "http://cp-img-cdn-lb.aws.playco.com/wb/MYBIGFATGREEKWEDDINGY2002M/MYBIGFATGREEKWEDDINGY2002M-1536x613-DMHE.jpg"
              }
            />
          </div>
        </OwlCarousel>
      </div>
  );
};
