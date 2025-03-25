import "./banner.js";
import "./recommend.js";
import "./quantity.js";
import "./header.js";
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.classList.contains("swiper-slide") || entry.target.classList.contains("fade")) {
					// console.log("fade");
					entry.target.classList.add("fade_up");
				} else {
					entry.target.classList.add("fade_in");
				}
			}
		});
	},
	{
		threshold: 0.2,
	}
);


document.querySelectorAll(".nav-logo,.nav-menu,.banner .swiper-wrapper,.text_circle, .newsletter__wrap, .quality_img,.quality__swiper .swiper-slide,.recommend .swiper-slide,.recommend__grid,.recommend__recipe-area , footer .fade ,.about,.about .about__video,.about .fade ").forEach((elem) => observer.observe(elem));


const maskDesc = document.querySelectorAll(".swiper-slide .mask-desc");
console.log(maskDesc);

maskDesc.forEach(function(item){
    console.log(item.textContent)
   item.textContent = `${item.textContent.slice(0,38)}...`
   
})