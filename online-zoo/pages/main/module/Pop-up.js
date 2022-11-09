const popUp = () => {
  const testimonials = document.querySelector(".testimonials__slider-content");
  const window = document.querySelector(".pop-up");
  const overlay = document.querySelector(".overlay-popup");
  const closeBtn = document.querySelector(".close");

  const show = (event) => {
    const element = event.target.closest(".testimonials__slider-item-wrapper");
    window.insertAdjacentElement("afterbegin", element);
    window.classList.add("pop-up--open");
    overlay.classList.toggle("overlay-popup--hidden");
  };

  const close = () => {
    window.firstChild.remove();
    window.classList.toggle("pop-up--open");
    overlay.classList.toggle("overlay-popup--hidden");
  };

  overlay.addEventListener("click", close);
  closeBtn.addEventListener("click", close);
  testimonials.addEventListener("click", show);
};
export default popUp;
