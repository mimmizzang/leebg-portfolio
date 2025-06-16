var swiper = new Swiper("section .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: "section .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "section .swiper-button-next",
    prevEl: "section .swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});
