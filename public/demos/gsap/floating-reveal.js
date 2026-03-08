/*floating 효과*/
gsap.utils.toArray(".circle").forEach((el, i) => {
  gsap.set(el, {
    x: gsap.utils.random(-50, 50),
    y: gsap.utils.random(-50, 50),
  });

  gsap.to(el, {
    x: "random(-200, 200)",
    y: "random(-150, 150)",
    scale: "random(0.8, 1.2)",
    duration: "random(4, 7)",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: i * 0.5,
  });
});

/*reveal 효과*/
gsap.set([".title", ".desc", "#replay-btn"], {
  y: 50,
  opacity: 0,
  transformOrigin: "bottom center",
});

const tl = gsap.timeline({
  defaults: {
    y: 0,
    opacity: 1,
    duration: 1,
  },
});

tl.to(".title", {
  ease: "power4.out",
  stagger: 0.1,
})

  .to(
    ".desc",
    {
      ease: "power2.out",
    },
    "-=0.6",
  )

  .to(
    "#replay-btn",
    {
      scale: 1,
      ease: "back.out(2)",
    },
    "-=0.4",
  )

  .then(() => {
    const replayBtn = document.querySelector("#replay-btn");
    replayBtn.addEventListener("mouseenter", () => {
      gsap.to(replayBtn, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });
    replayBtn.addEventListener("mouseleave", () => {
      gsap.to(replayBtn, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  });

document.querySelector("#replay-btn").addEventListener("click", () => {
  tl.restart();
});
