import animals from "./Animals.js";

const random = () => {
  const nums = [];
  let x = Math.floor(Math.random() * animals.length);

  while (nums.length !== animals.length) {
    if (!nums.includes(x)) {
      nums.push(x);
    } else x = Math.floor(Math.random() * animals.length);
  }
  return nums;
};

const renderAnimals = (count) => {
  const rundomNum = random().slice(0, count);
  let html = "";
  for (let i = 0; i < rundomNum.length; i++) {
    let x = rundomNum[i];
    html += `<div class="slider__card-wrapper">
<div class="slider__card">
  <img src=${animals[x].url} alt=${animals[x].alt} />
</div>
<div class="slider__card-description">
  <h4>${animals[x].title}</h4>
  <p>${animals[x].description}</p>
  <img src=${animals[x].iconUrl} alt="Eat icon" />
</div>
<p class="slider__card-hidden">${animals[x].title}</p>
</div>`;
  }
  return html;
};

export default renderAnimals;
