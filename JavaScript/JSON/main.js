var header = document.querySelector('header');

var section = document.querySelector('section');

var header = document.querySelector('header');

var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

var request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";

request.send();

function populateHeader(jsonObj) {
  
  var headerElement = document.createElement("h1");
  
  headerElement.innerHTML = jsonObj["squadName"];
  
  header.appendChild(headerElement);

  var paragraphElement = document.createElement("p");

  paragraphElement.innerHTML = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];

  header.appendChild(paragraphElement);
}

function showHeroes(jsonObj) {

  var heroes = jsonObj["members"];

  var article, h2, p1, p2, p3, list; 

  for (let i = 0; i < heroes.length; i++) {
    
    article = document.createElement("article");

    h2 = document.createElement("h2");
    
    p1 = document.createElement("p");
    
    p2 = document.createElement("p");

    p3 = document.createElement("p");
    
    list = document.createElement("ul");

    h2.innerHTML = heroes[i].name;

    p1.innerHTML =  "Secret identity: " + heroes[i].secretIdentity;

    p2.innerHTML = "Age: " + heroes[i].age;

    p3.innerHTML = "Superpowers: ";

    var powers = heroes[i].powers;

    for (let j = 0; j < powers.length; j++) {
      var item = document.createElement("li");
      item.innerHTML = powers[j];
      list.appendChild(item);
    }

    article.appendChild(h2).appendChild(p1).appendChild(p2).appendChild(p3).appendChild(list);

    section.appendChild(article);
  }
}

request.onload = function() {
  var superheroes = request.response;
  populateHeader(superheroes);
  showHeroes(superheroes);
}