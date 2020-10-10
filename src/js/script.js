const main = () => {
	const carousel = document.querySelectorAll('.carousel');
	M.Carousel.init(carousel, {
		indicators: true
	});
}

export default main();