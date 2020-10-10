import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './css/style.css';
import './js/nav.js';
import main from './js/script.js';

// img
import bgOne from './img/bg-1.jpg';
import bgTwo from './img/bg-2.jpg';
import bgThree from './img/bg-3.jpg';
import bgFour from './img/bg-4.jpg';

document.body.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#bgOne').src = bgOne;
    document.querySelector('#bgTwo').src = bgTwo;
    document.querySelector('#bgThree').src = bgThree;
    document.querySelector('#bgFour').src = bgFour;
});

document.addEventListener("DOMContentLoaded", main);