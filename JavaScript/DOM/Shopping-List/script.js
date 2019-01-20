var bodyElement = document.querySelector("body");

var addBttn = document.querySelector(".item-bttn");

function random() {
	return Math.floor(Math.random() * 255);
}

var item, liElement, spanElement, deleteBttn;

var parentNode = document.createElement("ul");

document.querySelector(".list").appendChild(parentNode);

function addItem() {

	spanElement = document.createElement("span");
	
	item = document.querySelector("input").value
	spanElement.textContent = item;

	document.querySelector("input").value = "";

	liElement = document.createElement("li");
	liElement.appendChild(spanElement);

	deleteBttn = document.createElement("button");
	deleteBttn.textContent = "Delete";

	liElement.appendChild(deleteBttn);

	parentNode.appendChild(liElement);

	deleteBttn.onclick = function(event) {
		parentNode.removeChild(document.querySelector("li"));
	}

	bodyElement.style.backgroundColor = "rgb(" + random() + "," + random() + "," + random() + ")";	
}

addBttn.onclick = addItem();

parentNode.removeChild(liElement);

document.querySelector("input").addEventListener("keypress", function(event) {
	if (event.charCode === 13) {
		addItem();
	}
});

