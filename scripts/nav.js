// Mobile Menu Logic (shared across all pages)
const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");

if (menu && menuToggle && closeMenu) {
	const openMenu = () => {
		menu.classList.remove("translate-x-full");
		document.body.style.overflow = "hidden";
	};

	const closeMenuFunc = () => {
		menu.classList.add("translate-x-full");
		document.body.style.overflow = "";
	};

	menuToggle.addEventListener("click", openMenu);
	closeMenu.addEventListener("click", closeMenuFunc);
	window.addEventListener("click", (e) => {
		if (!menu.contains(e.target) && e.target !== menuToggle && e.target !== closeMenu) {
			closeMenuFunc();
		}
	});
}
