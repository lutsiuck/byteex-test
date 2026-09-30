$(function() {
  const brandsSlider = new Swiper('.brands-slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    slidesPerView: 5,
    spaceBetween: 100,
    // breakpoints: {
    //   768: {
    //     slidesPerView: 2,
    //   },
    // },
  });

  const thumbsSwiper = new Swiper('.swiper-thumbs', {
    spaceBetween: 7,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 'auto',
  });

  const benefitsMainSlider = new Swiper('.benefits-main-slider', {
    navigation: {
      nextEl: '.benefits-next',
      prevEl: '.benefits-prev',
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });

  const processSlider = new Swiper('.process-slider', {
    slidesPerView: 3,
    spaceBetween: 41,
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    slidesPerView: 3,
    spaceBetween: 21,
    loop: true,
    navigation: {
      nextEl: '.review-next',
      prevEl: '.review-prev',
    },
  });

  $('.faq-question').on('click', function() {
    $(this).closest('.faq-item').toggleClass('active');
  });
});

