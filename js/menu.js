const menu = document.querySelector('.hamItems');
const mobileNav = document.querySelector('.mob-nav');
const ham = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');

menu.classList.add('invisible');

// Event Listener for hamburger
ham.addEventListener('click', () => {
  menu.classList.remove('invisible');
  mobileNav.classList.add('invisible');
});
// Event Listener for close button
closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('invisible');
  menu.classList.add('invisible');
});
// Event Listener for menu items
menu.addEventListener('click', () => {
  menu.classList.add('invisible');
  mobileNav.classList.remove('invisible');
});
