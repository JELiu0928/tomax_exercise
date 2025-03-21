import { initSwiper } from "./utils/swiper";

window.addEventListener("DOMContentLoaded", function () {
    initSwiper('.quality__swiper', {
		slidesPerView: 4,
        // spaceBetween: 40,
        speed: 800, 
		breakpoints: {
			960: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 3,
                spaceBetween: 0,
			},
            400: {
				slidesPerView: 2,
                spaceBetween: 0,
			},

		},
	});
});