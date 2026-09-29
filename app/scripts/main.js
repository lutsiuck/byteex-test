$(function() {
  const brandsSlider = new Swiper('.brands-slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    slidesPerView: 5,
    spaceBetween: 50,
    // breakpoints: {
    //   768: {
    //     slidesPerView: 2,
    //   },
    // },
  });
});

