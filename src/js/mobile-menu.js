(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    //bodyScrollLock can be added to block page scrolling when mobile-menu is opened. To use this code we need to install body-scroll-lock using "npm install body-scroll-lock"

    // const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();

const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
closeMenuBtn.disabled = true;

openMenuBtn.addEventListener('click', () => {
  setTimeout(() => {
    openMenuBtn.disabled = true;
    closeMenuBtn.disabled = false;
  }, 500);
});

closeMenuBtn.addEventListener('click', () => {
  setTimeout(() => {
    closeMenuBtn.disabled = true;
    openMenuBtn.disabled = false;
  }, 500);
});
