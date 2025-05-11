// header nav 슬라이드 기능
const navSwiper = new Swiper(".nav-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// GSAP와 ScrollToPlugin 등록
gsap.registerPlugin(ScrollToPlugin);

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

// 스크롤 업 버튼 기능
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power2.out" });
});
