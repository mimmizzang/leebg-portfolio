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

// 모든 링크에 대해 클릭 이벤트 처리
const navLinks = document.querySelectorAll("nav .scroll");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // 기본 링크 동작 방지

    const targetId = link.getAttribute("href").substring(1); // href에서 #을 제외한 ID
    const targetElement = document.getElementById(targetId); // 해당 ID를 가진 엘리먼트

    gsap.to(window, {
      scrollTo: { y: targetElement, offsetY: 50 }, // 50px만큼 떨어져서 스크롤
      duration: 1,
      ease: "power2.out",
    });
  });
});

/*
// main 텍스트 부드럽게 등장
gsap.from("#main h2", {
  opacity: 0,
  y: -30,
  duration: 1,
  delay: 0.5,
  ease: "power3.out",
});
gsap.from("#main p", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.8,
  ease: "power3.out",
});
gsap.from("#main button", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 1.0,
  ease: "power3.out",
});
*/

// 버튼 클릭 스크롤 부드럽게 이동
function scrollToSection(id) {
  const section = document.getElementById(id);
  gsap.to(window, {
    scrollTo: { y: section, offsetY: 50 },
    duration: 1,
    ease: "power2.out",
  });
}

// 각 섹션마다 부드럽게 등장하는 애니메이션 적용
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });
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

/*scrolltotop button*/
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.replace("opacity-0", "opacity-100");
    scrollToTopBtn.classList.replace("invisible", "visible");
    scrollToTopBtn.classList.remove("translate-y-10");
  } else {
    scrollToTopBtn.classList.replace("opacity-100", "opacity-0");
    scrollToTopBtn.classList.replace("visible", "invisible");
    scrollToTopBtn.classList.add("translate-y-10");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power2.out" });
});
