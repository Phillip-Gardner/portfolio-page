  const menu = document.querySelector("#mobile-menu")
  const menuLinks = document.querySelector(".navbar_menu")

  // Display Mobile Menu
  // Function that adds active class like in our CSS
  const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
  }

  menu.addEventListener('click', mobileMenu);
