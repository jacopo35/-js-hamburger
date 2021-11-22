/* Hamburger menu:
mostrare / nascondere il menu principale
(per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile). */

const elementHamburger = document.querySelector('.fa-bars');
console.log(elementHamburger);


const hamburgerMenu = document.querySelector('.hamburger-menu');
elementHamburger.addEventListener('click', function () {
    hamburgerMenu.style.display = 'block';
})

const elementClose = document.querySelector('.fa-times');
console.log(elementClose);
elementClose.addEventListener('click', function () {
    hamburgerMenu.style.display = 'none';
})