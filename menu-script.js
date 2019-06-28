// menu-page script
let backButton = document.querySelector('.back-button');

let lastPage = localStorage.getItem('lastPage') || 'file:///home/francis/Code/Sandbox/testmenu/index.html';

backButton.href = lastPage;

const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.add('fade-out');
      setTimeout(() => {
        window.location = link.href;
      }, 500);
  })
})