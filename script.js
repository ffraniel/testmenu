//non-menu page script
const thisPage = window.location.href;

localStorage.setItem('lastPage', thisPage);

let checkWorked = localStorage.getItem('lastPage');

//optional link-jacking
const menuBurger = document.querySelector('.menu-burger');

menuBurger.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('body').classList.add('fade-out');
  setTimeout(() => {
    window.location = menuBurger.href;
  }, 500);
});