const leftArrowSvg =
  "<svg xmlns='http://www.w3.org/2000/svg' fill='#fff' width='24' height='24' viewBox='0 0 24 24'><path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z'/></svg>";
const rightArrowSvg =
  "<svg xmlns='http://www.w3.org/2000/svg' fill='#fff' width='24' height='24' viewBox='0 0 24 24'><path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z'/></svg>";

export const SliderCarouselOptions = {
  loop: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  margin: 10,
  nav: true,
  navText: [
    `<div class='nav-btn prev-slide'>${leftArrowSvg}</div>`,
    `<div class='nav-btn next-slide'>${rightArrowSvg}</div>`,
  ],
  smartSpeed: 900,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    660: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
};
export const CategoriesCarouselOptions = {
  loop: true,
  center: true,
  margin: 10,
  nav: true,
  navText: [
    `<div class='nav-btn prev-slide'>${leftArrowSvg}</div>`,
    `<div class='nav-btn next-slide'>${rightArrowSvg}</div>`,
  ],
  slideBy: 8,
  dots: false,
  responsive: {
    0: {
      items: 4,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 10,
    },
  },
};
