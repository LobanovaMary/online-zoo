function BurgerMenu() {
  const menu = document.querySelector(".burger");
  const overlay = document.querySelector(".overlay");

  const toggleMenu = () => {
    document
      .querySelector(".burger__line")
      .classList.toggle("burger__line--open");
    document
      .querySelector(".header__container")
      .classList.toggle("header--open");

    document.querySelector(".logo").classList.toggle("logo--open");
    document
      .querySelector(".logo__sub-title")
      .classList.toggle("logo__sub-title--open");
    document
      .querySelector(".header__hidden")
      .classList.toggle("header__hidden--open");
    document.querySelector(".burger").classList.toggle("burger--open");
    document
      .querySelector(".header__design")
      .classList.toggle("header__hidden--open");
    overlay.classList.toggle("overlay--hidden");
  };
  menu.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
}

export default BurgerMenu;
