import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./index.css"

export const Slider = (props) => {
  const leftArrowSvg="<svg xmlns='http://www.w3.org/2000/svg' fill='#fff' width='24' height='24' viewBox='0 0 24 24'><path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z'/></svg>"
  const rightArrowSvg="<svg xmlns='http://www.w3.org/2000/svg' fill='#fff' width='24' height='24' viewBox='0 0 24 24'><path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z'/></svg>"
  const options= {
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    nav: true,
    navText:[`<div class='nav-btn prev-slide'>${leftArrowSvg}</div>`,`<div class='nav-btn next-slide'>${rightArrowSvg}</div>`],
    smartSpeed :900,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 2,
        },
    },
}
  return (
      <div style={{height:200, zIndex:1}}>
        <OwlCarousel className='owl-theme' {...options}>
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
