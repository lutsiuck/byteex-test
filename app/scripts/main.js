$(function() {
  const brandsSlider = new Swiper('.brands-slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    slidesPerView: 5,
    spaceBetween: 100,
    breakpoints: {
      991: {
        slidesPerView: 5,
      },
      420: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
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
    breakpoints: {
      767: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    slidesPerView: 3,
    spaceBetween: 21,
    loop: true,
    navigation: {
      nextEl: '.review-next',
      prevEl: '.review-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });

  $('.faq-question').on('click', function() {
    $(this).closest('.faq-item').toggleClass('active');
  });
});

