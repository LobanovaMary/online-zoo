const testimonials = () => {
  const count = document.querySelector(".testimonials__slider-progress");
  const container = document.querySelector(".testimonials__slider-content");

  count.addEventListener("change", () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 1490) {
      container.style.transform = `translateX(-${count.value * 293}px)`;
    } else {
      container.style.transform = `translateX(-${count.value * 323}px)`;
    }
  });
};
export default testimonials;
