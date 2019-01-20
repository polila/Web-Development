var divElement = document.querySelector("div");

var WIDTH = window.innerWidth;

var HEIGHT = window.innerHeight;

divElement.style.width = WIDTH + "px";

divElement.style.height = HEIGHT + "px";

window.onresize = function() {

	divElement.style.width = WIDTH + "px";

	divElement.style.width = HEIGHT + "px";
}