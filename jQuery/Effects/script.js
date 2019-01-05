const context = {
  questions: [
  {
    description: 'Something that we value for its own sake has?',
    hint: "When something is valued for its own sake, its value is inherent.",
    q: ["Instrumental and Intrinsic value","Instrumental value"],
    a: "Intrinsic value"
  }]
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

compiledHtml = template(context);

document.getElementById("information").innerHTML = compiledHtml;
