// menu-page script
let backButton = document.querySelector('.back-button');

let lastPage = localStorage.getItem('lastPage') || 'file:///home/francis/Code/Sandbox/testmenu/index.html';

backButton.href = lastPage;