const swiper = new Swiper(".wrap", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  speed: 1000,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: -100,
    depth: 400,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
});
