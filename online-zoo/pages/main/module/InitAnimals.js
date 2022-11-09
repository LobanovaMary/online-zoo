import renderAnimals from "./RenderAnimals.js";

const initAnimals = () => {
  const html = `<div class="slider__animals">${renderAnimals(
    6
  )}</div><div class="slider__animals">${renderAnimals(
    6
  )}</div><div class="slider__animals">${renderAnimals(6)}</div>`;
  const container = document.querySelector(".slider__content");
  container.insertAdjacentHTML("afterbegin", html);
};

export default initAnimals;
