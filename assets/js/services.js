const servicesCarousel = new Swiper(".mySwiper", {
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
