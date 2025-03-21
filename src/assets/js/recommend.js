import { initSwiper } from "./utils/swiper";
let swiperInstance;
// let isSwiperInitialized = false;
window.addEventListener("DOMContentLoaded", function () {
	initNewSwiper();
});
function initNewSwiper() {
	swiperInstance = initSwiper(".recommend__swiper", {
		slidesPerView: 3,
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			200: {
				slidesPerView: 2,
			},
		},
	});
}
