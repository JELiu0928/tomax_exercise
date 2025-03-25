import { initSwiper } from "./utils/swiper";
window.addEventListener("DOMContentLoaded", function () {
	initNewSwiper();
});
function initNewSwiper() {
	initSwiper(".recommend__swiper", {
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
