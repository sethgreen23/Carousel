const buttons = document.querySelectorAll("[data-carousel-button]");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton == "prev" ? -1 : 1;
    // console.log(button);
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    // console.log(activeSlide);
    let nextIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (nextIndex < 0) nextIndex = slides.children.length - 1;
    if (nextIndex >= slides.children.length) nextIndex = 0;
    // console.log("next-index " + nextIndex);
    slides.children[nextIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
