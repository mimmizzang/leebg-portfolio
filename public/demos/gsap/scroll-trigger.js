gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section-container").forEach((container) => {
  const box = container.querySelector(".reveal-box");
  const text = container.querySelector(".reveal-text");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl.from(box, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })

    .from(
      text,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.6",
    );
});
