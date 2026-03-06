gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector(".scroll-section");

gsap.from(section.querySelectorAll(".left-img"), {
  scrollTrigger: {
    trigger: section,
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

gsap.from(section.querySelectorAll(".right-img"), {
  scrollTrigger: {
    trigger: section,
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  x: 200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
