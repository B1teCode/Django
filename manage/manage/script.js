const btn = document.querySelector("#menu-btn");
const nav = document.querySelector("#menu");
console.log(btn)
console.log(nav)
btn.addEventListener("click", () => {
	btn.classList.toggle("open");
	nav.classList.toggle("flex");
	nav.classList.toggle("hidden");
});
