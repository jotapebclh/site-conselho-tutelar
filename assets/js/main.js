const menuButton = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#menu-principal');

if (menuButton && mainMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mainMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
