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

// 버튼 클릭 스크롤 부드럽게 이동
function scrollToSection(id) {
  const section = document.getElementById(id);
  gsap.to(window, {
    scrollTo: { y: section, offsetY: 50 },
    duration: 1,
    ease: "power2.out",
  });
}

// GSAP와 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 각 섹션마다 부드럽게 등장하는 애니메이션 적용
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%", // 화면 위에서 80% 지점일 때 시작
      toggleActions: "play none none none", // 스크롤 방향에 따른 액션
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });
});

// skills 슬라이드 기능
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
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
