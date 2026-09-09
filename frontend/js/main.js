const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
	const navLinks = siteNav.querySelectorAll("a");

	menuToggle.addEventListener("click", () => {
		const isOpen = siteNav.classList.toggle("is-open");

		menuToggle.setAttribute("aria-expanded", String(isOpen));
		menuToggle.querySelector(".sr-only").textContent = isOpen
			? "Cerrar menú"
			: "Abrir menú";
	});

	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			siteNav.classList.remove("is-open");
			menuToggle.setAttribute("aria-expanded", "false");
			menuToggle.querySelector(".sr-only").textContent = "Abrir menú";
		});
	});
}