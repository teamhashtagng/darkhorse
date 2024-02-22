const clientsCarousel = new Swiper(".clients__carousel", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1.15,
      spaceBetween: 10,
    },
    350: {
      slidesPerView: 1.25,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2.25,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.25,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 4.25,
      spaceBetween: 30,
    },
  },
});
