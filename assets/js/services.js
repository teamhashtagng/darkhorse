const materialCarousel = new Swiper(".services-carousel--material", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next--material",
    prevEl: ".swiper-button-prev--material",
  },
});

const manpowerCarousel = new Swiper(".services-carousel--manpower", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next--manpower",
    prevEl: ".swiper-button-prev--manpower",
  },
});

const engineeringCarousel = new Swiper(".services-carousel--engineering", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next--engineering",
    prevEl: ".swiper-button-prev--engineering",
  },
});
