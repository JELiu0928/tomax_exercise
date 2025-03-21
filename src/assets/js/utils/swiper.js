import Swiper from "swiper";
import "swiper/css"; // ✅ 引入 Swiper 的 CSS 樣式
import "swiper/css/navigation"; // ✅ 只引入需要的模組樣式
import "swiper/css/pagination";
import 'swiper/css/grid'; // 引入 Grid 樣式
import { Navigation, Pagination,Grid } from "swiper/modules";

// 傳入類名，額外設置
export function initSwiper(selector, options = {}) {
	const defaultOptions = {
		modules: [Navigation, Pagination,Grid], // ✅ 註冊模組
		// loop: true, // 開啟循環
		autoplay: {
			delay: 5000, // 每 5 秒自動切換
		},
        
		pagination: {
			el: `${selector} .swiper-pagination`,
			clickable: true, // 可以點擊頁碼控制切換
		},
		navigation: {
			nextEl: `${selector} .swiper-button-next`,
			prevEl: `${selector} .swiper-button-prev`,
		},
		on: {
			init: function () {
				updateNavigationButtons(this);
			},
			slideChange: function () {
				updateNavigationButtons(this);
			},
		},
	};
	return new Swiper(selector, { ...defaultOptions, ...options });
}

export function updateNavigationButtons(swiper) {
	const prevBtn = document.querySelector(".swiper-button-prev");
	const nextBtn = document.querySelector(".swiper-button-next");

	// 第一張幻燈片時隱藏左箭頭
	if (swiper.activeIndex === 0) {
		prevBtn.style.display = "none"; // 隱藏左箭頭
		nextBtn.style.display = "block"; // 顯示右箭頭
	}
	// 最後一張幻燈片時隱藏右箭頭
	else if (swiper.activeIndex === swiper.slides.length - 1) {
		nextBtn.style.display = "none"; // 隱藏右箭頭
		prevBtn.style.display = "block"; // 顯示左箭頭
	} else {
		prevBtn.style.display = "block";
		nextBtn.style.display = "block";
	}
}
