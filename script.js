

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');
const sideButtons = document.querySelector('.side-btn');

hamburger.addEventListener('click', () => {
const expanded = hamburger.getAttribute('aria-expanded') === 'true';
hamburger.setAttribute('aria-expanded', !expanded);

navMenu.classList.toggle('active');
sideButtons.classList.toggle('active');
hamburger.classList.toggle('open');  
});

