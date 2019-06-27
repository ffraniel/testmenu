//non-menu page script
const thisPage = window.location.href;

localStorage.setItem('lastPage', thisPage);

let checkWorked = localStorage.getItem('lastPage');