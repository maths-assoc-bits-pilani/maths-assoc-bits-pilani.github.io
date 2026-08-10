// Events Carousel Logic (homepage only)
const carouselInner = document.getElementById('carousel-inner');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const carouselItems = document.querySelectorAll('.carousel-item');

if (carouselInner && prevButton && nextButton && carouselItems.length > 0) {
	let currentIndex = 0;

	function updateCarousel() {
		const offset = -currentIndex * 100;
		carouselInner.style.transform = `translateX(${offset}%)`;
	}

	nextButton.addEventListener('click', () => {
		currentIndex = (currentIndex + 1) % carouselItems.length;
		updateCarousel();
	});

	prevButton.addEventListener('click', () => {
		currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
		updateCarousel();
	});
}
