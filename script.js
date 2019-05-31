let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

//Burgermenu
window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("sidenVises");

	document.querySelector("#menuknap").addEventListener("click", toggleMenu);


}


function toggleMenu() {
	console.log("toggleMenu");
	document.querySelector("#menu").classList.toggle("hidden");

	let erSkjult = document.querySelector("#menu").classList.contains("hidden");

	if (erSkjult == true) {
		document.querySelector("#menuknap").textContent = "☰";
		document.querySelector("#grid_nav").classList.remove("hidden");
	} else {
		document.querySelector("#menuknap").textContent = "X";
		document.querySelector("#grid_nav").classList.add("hidden");
	}
}
