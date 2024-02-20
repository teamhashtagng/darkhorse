const servicesCarousel = new Swiper(".services-carousel--material", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next--material",
    prevEl: ".swiper-button-prev--material",
  },
});
