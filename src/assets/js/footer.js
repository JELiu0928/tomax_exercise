const navItems = document.querySelectorAll(".footer__nav-wrap .nav_item");

navItems.forEach((item)=>{
    item.addEventListener("click", function () {
        console.log(this)
		this.classList.toggle("show");
	});
})
