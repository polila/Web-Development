const context = {
	fonts: [
	{
		id: ["arial","times","serif","sans-serif","monospace","calibri","cursive"],
		size: 12,
		weight: ['Normal','Bold', 'Bolder', 'Lighter']
	}]
};

const source = document.getElementById("templateHB").innerHTML;

const template = Handlebars.compile(source);

let html = template(context);

document.getElementById("information").innerHTML = html;
