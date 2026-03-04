import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

/*모바일 메뉴 클릭 효과*/
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll("#mobile-menu a");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

/*모든 링크에 대해 클릭 이벤트 처리*/
const navLinks = document.querySelectorAll("nav .scroll");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    gsap.to(window, {
      scrollTo: { y: targetElement, offsetY: 50 },
      duration: 1,
      ease: "power2.out",
    });
  });
});

/*main section gsap효과*/
const mainTl = gsap.timeline({
  defaults: {
    ease: "power4.out",
    duration: 1,
  },
});

mainTl
  .fromTo(".main-sub", { y: 30, opacity: 0 }, { y: 0, opacity: 1, delay: 0.4 })
  .fromTo(".main-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8")
  .fromTo(".main-desc", { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8")
  .fromTo(".main-btn", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, clearProps: "transform" }, "-=0.8");

/*main section button효과*/
document.getElementById("go-projects").addEventListener("click", () => {
  gsap.to(window, { scrollTo: { y: "#projects", offsetY: 50 }, duration: 1 });
});

document.getElementById("go-contact").addEventListener("click", () => {
  gsap.to(window, { scrollTo: { y: "#contact", offsetY: 50 }, duration: 1 });
});

/*projects section slide효과*/
new Swiper(".projectSwiper", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

/*section 등장하는 gsap효과*/
gsap.utils.toArray(".section").forEach((section) => {
  gsap.fromTo(
    section,
    {
      opacity: 0,
      y: 50,
    },
    {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    },
  );
});

/*scrolltotop button*/
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

gsap.set(scrollToTopBtn, {
  autoAlpha: 0,
  y: 40,
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    gsap.to(scrollToTopBtn, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  } else {
    gsap.to(scrollToTopBtn, {
      autoAlpha: 0,
      y: 40,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  }
});

scrollToTopBtn.addEventListener("click", () => {
  gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power2.out" });
});
