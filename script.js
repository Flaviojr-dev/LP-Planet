const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

const openMenu = () => {
  mobileMenu.classList.add('show');
  mobileMenu.style.opacity = '1';
  mobileMenu.style.transform = 'translateY(0)';
};

const closeMobileMenu = () => {
  mobileMenu.style.opacity = '0';
  mobileMenu.style.transform = 'translateY(-10px)';
  setTimeout(() => {
    mobileMenu.classList.remove('show');
  }, 300);
};

hamburgerMenu.addEventListener('click', openMenu);

closeMenu.addEventListener('click', closeMobileMenu);

