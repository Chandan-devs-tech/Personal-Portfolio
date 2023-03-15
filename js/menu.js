const menu = document.querySelector('.hamItems');
const mobileNav = document.querySelector('.mob-nav');
const ham = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');
const hide = document.querySelector('.footer-social-icons-container');

menu.classList.add('invisible');

// Event Listener for hamburger
ham.addEventListener('click', () => {
  menu.classList.remove('invisible');
  mobileNav.classList.add('invisible');
  hide.classList.add('invisible');
});
// Event Listener for close button
closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('invisible');
  menu.classList.add('invisible');
  hide.classList.remove('invisible');
});
// Event Listener for menu items
menu.addEventListener('click', () => {
  menu.classList.add('invisible');
  mobileNav.classList.remove('invisible');
  hide.classList.remove('invisible');
});


