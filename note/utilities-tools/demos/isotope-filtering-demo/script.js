let grid;

window.addEventListener("load", () => {
  init();
  filter(document.querySelectorAll("main ul li"));
});

function init() {
  grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    percentPosition: true,
    transitionDuration: "0.5s",
  });
}

function filter(arr) {
  for (let el of arr) {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      grid.arrange({
        filter: sort,
      });

      for (let el of arr) {
        el.classList.remove("on");
      }

      e.currentTarget.classList.add("on");
    });
  }
}
