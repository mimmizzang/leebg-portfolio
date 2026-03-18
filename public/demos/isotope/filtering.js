const grid = document.querySelector(".grid-container");

if (grid) {
  imagesLoaded(grid, function () {
    const iso = new Isotope(grid, {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
      percentPosition: true,
      transitionDuration: "0.4s",
      stagger: 30,
    });

    const filterButtons = document.querySelectorAll(".filter-nav button");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active-filter"));

        button.classList.add("active-filter");

        const filterValue = button.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
      });
    });
  });
}
