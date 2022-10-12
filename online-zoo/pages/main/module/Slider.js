import renderAnimals from "./RenderAnimals.js";

const slider = () => {
  const btnLeft = document.querySelector(".slider-left");
  const btnRight = document.querySelector(".slider-right");
  const slider = document.querySelector(".slider__content");
  const chunk = slider.childNodes;

  const moveLeft = () => {
    slider.classList.add("transition-left");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
  };

  const moveRight = () => {
    slider.classList.add("transition-right");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
    console.log(chunk);
  };

  const generateItem = () => {
    console.log("hi");
    return `<div class="slider__animals">${renderAnimals(6)}</div>`;
  };

  const changeElementLeft = () => {
    const item = generateItem();
    slider.insertAdjacentHTML("afterbegin", item);
    chunk.item(2).remove();
  };

  const changeElementRight = () => {
    const item = generateItem();
    console.log(item);
    slider.insertAdjacentHTML("beforeend", item);
    chunk.item(0).remove();
  };

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);

  slider.addEventListener("animationend", (animation) => {
    if (
      animation.animationName === "move-left" ||
      animation.animationName === "move-left-middle" ||
      animation.animationName === "move-left-small"
    ) {
      slider.classList.remove("transition-left");
      changeElementLeft();
    }
    if (
      animation.animationName === "move-right" ||
      animation.animationName === "move-right-middle" ||
      animation.animationName === "move-right-small"
    ) {
      slider.classList.remove("transition-right");
      changeElementRight();
    }

    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);
  });
};
export default slider;
