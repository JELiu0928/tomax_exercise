const navDropdown = document.querySelectorAll(".nav .nav-dropdown");
const navItems = document.querySelectorAll(".nav .nav-item");
const header = document.querySelector("header");
const nav = header.querySelectorAll(".nav .nav-dropdown > a");
const menuToggleBtn = document.querySelector(".menu_toggle_btn");
menuToggleBtn.addEventListener("change", function () {
	document.body.style.overflow = this.checked ? "hidden" : "";
});
window.addEventListener("resize", () => {
	if (window.innerWidth <= 1180) {
		header.style.height = "60px";
	} else {
		document.body.style.overflow = "";
	}
	updateHeader();
});
function updateHeader() {
	if (window.innerWidth <= 1180) return;
	if (window.scrollY > "200") {
		header.style.height = "80px";
		nav.forEach((item) => {
			item.style.lineHeight = "80px";
		});
	} else {
		header.style.height = "120px";
		nav.forEach((item) => {
			item.style.lineHeight = "120px";
		});
	}
}
window.addEventListener("scroll", updateHeader);
navItems.forEach((item) => {
	item.addEventListener("mouseenter", () => {
		const dropdownItem = item.querySelector(".nav-dropdown-item");
		if (dropdownItem) {
			dropdownItem.style.pointerEvents = "auto";
			dropdownItem.classList.add("current");
			dropdownItem.closest(".nav-dropdown").querySelector("a").classList.add("current");
		}
	});
	item.addEventListener("mouseleave", () => {
		const dropdownItem = item.querySelector(".nav-dropdown-item");
		if (dropdownItem) {
			dropdownItem.style.pointerEvents = "none";
			dropdownItem.classList.remove("current");
			dropdownItem.closest(".nav-dropdown").querySelector("a").classList.remove("current");
		}
	});
});

const showBtn = document.querySelectorAll(".nav-hamburger .nav-dropdown");
showBtn.forEach((item) => {
	item.addEventListener("click", function () {
		const navDropdownItem = this.closest(".nav-dropdown");
		navDropdownItem.classList.toggle("show");
	});
});
