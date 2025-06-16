gsap.utils.toArray(".floating-img").forEach((el) => {
  gsap.to(el, {
    y: gsap.utils.random(10, 30),
    duration: gsap.utils.random(1.5, 3),
    repeat: -1,
    yoyo: true,
    delay: gsap.utils.random(0, 1.5),
  });
});
