import bgOne from '../img/bg-1.jpg';
import bgTwo from '../img/bg-2.jpg';
import bgThree from '../img/bg-3.jpg';
import bgFour from '../img/bg-4.jpg';

export default class main {
   static imgCarousel() {
        document.querySelector('#bgOne').src = bgOne;
        document.querySelector('#bgTwo').src = bgTwo;
        document.querySelector('#bgThree').src = bgThree;
        document.querySelector('#bgFour').src = bgFour;
    }

   static initCarousell() {
        const carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(carousel, {
            indicators: true,
            fullWidth: true
        });
        setInterval(()=>{
            M.Carousel.getInstance(carousel[0]).next();
         },3000);
    }

    static initCollapsible() {
        const collapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsible);
    }

    static initParallax() {
        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax);
    }

}