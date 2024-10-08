
/* --------------------------
	Toggle menu on Mobile Device
/* --------------------------*/

const hamburger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	navMenu.classList.toggle("toggled");
}


/* --------------------------
	Dropdown menu - Toggle
/* --------------------------*/
document.addEventListener('click', e => {
	const isDropdownLink = e.target.matches('.dropdown-link');
	if(!isDropdownLink && e.target.closest('.dropdown') != null) return;

	let currentDropdown;

	if(isDropdownLink) {
		currentDropdown = e.target.closest('.dropdown');
		currentDropdown.classList.toggle('active');
	}

	document.querySelectorAll(".dropdown.active").forEach(dropdown => {
		if(dropdown === currentDropdown) return
		dropdown.classList.remove('active');
	})
})


/* --------------------------
	Filter elements - Tab content Component
/* --------------------------*/
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("tab-content-item");
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		removeClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
	}
}

// Show filtered elements
function addClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Hide elements that are not selected
function removeClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("tab");
var btns = btnContainer.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
