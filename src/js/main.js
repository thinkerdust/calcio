export default class main {

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