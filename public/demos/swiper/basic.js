const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  autoplay: { delay: 3000 },
  navigation: {
    nextEl: ".swiper-next-btn",
    prevEl: ".swiper-prev-btn",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
  },
});
