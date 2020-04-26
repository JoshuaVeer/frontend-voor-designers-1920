// Selecteer elementen uit de HTML file
var section1 = document.querySelector('#sec1');
var slider = document.querySelector('#slider');
var grid = document.querySelector('#grid');
var lijst;
var loader = document.querySelector('span');

// De URL van het JSON bestand in een variabele stoppen
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
// Een request object aanmaken
var request = new XMLHttpRequest();

// De request openen
request.open('GET', requestURL);
// Aangeven dat het verzochte bestand JSON is en het verzoek versturen
request.responseType = 'json';
request.send();

// Wachten tot de JSON binnenkomt
request.onload = function () {
    console.log(request.response);
    showCover(request.response);
}

// Het instellen van de tabindex van ALLE li elementen in de code
let listItems = document.querySelectorAll('li[tabindex="0"]');
console.log(listItems);

// Loopen door de lijst aan li elementen
let i = 0;
i < listItems.length;

// Eventlistener toevoegen op 'keydown'
document.addEventListener('keydown', (event) => {
    console.log(event);
    // Selecteer alle li items
    let listItems = document.querySelectorAll('li');

    // Als er op de linkerpijl wordt gedrukt gebeurt er iets
    if (event.key === 'Shift') {
        // Wordt de knop ingedrukt?
        if (i === -1) {
            // Zo ja dan begint de selectie in delijst
            i = listItems.length - 1;
            // Focus op het item
            listItems[i].focus();
        } else {
            // Zo niet dan gebeurt er niks
            i--;
            // Focus op het huidig geselecteerde item
            listItems[i].focus();
        }
    }
}, true);

// Een variabele aanmaken en direct een functie toewijzen waarin ik een class toevoeg aan het element. Dit is het laadscherm.
var loadFunctie = function () {
    loader.classList.add('hallo');
}

// 2 seconden na het laden van de pagina wordt bovenstaande functie getriggerd
window.onload = function () {
    setTimeout(loadFunctie, 2000);
}

console.log(loadFunctie);

// Hier creëer ik alle elementen die in de html worden gebruikt
function showCover(movies) {
    // Een ul aanmaken en deze een ID meegeven
    var unorderedList = document.createElement('ul');
    unorderedList.setAttribute('id', 'filmLijst');
    section1.appendChild(unorderedList);
    // Hier selecteer ik de hierboven aangemaakte lijst
    lijst = document.querySelector('#filmLijst');

    // Loop door de gegevens in het json bestand
    for (let i = 0; i < movies.length; i++) {

        // Hier volgt een grote lijst waarin ik steeds een element aanmaak en laat verschijnen op de html pagina
        var li = document.createElement('li');
        // Een waarde toevoegen, in dit geval tabindex 0
        li.setAttribute('tabindex', 0);
        unorderedList.appendChild(li);

        // Hier zeg ik dat hij alle covers uit de json moet halen van iedere film en deze plaatsen in een img element. Dit doe ik ook voor de titels, genres etc.
        var cover = document.createElement('img');
        cover.setAttribute("src", movies[i].cover);
        li.appendChild(cover);

        var div = document.createElement('div');
        li.appendChild(div);

        var titel = document.createElement('h2');
        titel.textContent = movies[i].title;
        div.appendChild(titel);

        // Voordat ik de textcontent uit het json bestand haal voeg ik een string toe die ervoor zorgt dat er iets voor het content uit de json komt te staan. In dit geval 'Genre'
        var genre = document.createElement('p');
        genre.textContent = ('Genre: ' + movies[i].genres);
        div.appendChild(genre);

        var plot = document.createElement('p');
        plot.textContent = movies[i].simple_plot;
        div.appendChild(plot);

        var release = document.createElement('p');
        release.textContent = ('Release: ' + movies[i].release_date);
        div.appendChild(release);
    }

    // Bron code: Nino Schelcher
    // Voor iedere img wordt een eventlistener en een functie gemaakt. Deze functie roept steeds het element op dat direct na de afbeelding komt, waardoor de bijbehorende div van een film wordt opgeroepen.
    Array.from(document.getElementsByTagName("img")).forEach(img => img.addEventListener("click", function () {
        img.nextElementSibling.classList.toggle('show');
        img.classList.toggle('show');
    }));
}

// Een functie waarbij ik classes toevoeg aan de grip knop en de layout. De knop wordt wit (active) en de layout veranderd naar grid. De witte kleur verwijder ik van de sliderknop(inactive).
function gridSwitch() {
    grid.classList.add('active');
    slider.classList.remove('active');
    lijst.classList.add('switch');
}

// Hier doe ik hetzelfde, maar dan andersom
function sliderSwitch() {
    grid.classList.remove('active');
    slider.classList.add('active');
    lijst.classList.remove('switch');
}

grid.addEventListener('click', gridSwitch);
slider.addEventListener('click', sliderSwitch);

// Hier volgen heel wat pogingen met verschillende doeleinden.

// Hier probeerde ik de functie om door te lijst te navigeren te maken.
//document.addEventListener("keydown", function() {
//  if (event.keyCode == 39) {
//    goLeft() {
//        
//  } else if (event.keyCode == 37) {
//    goRight() {
//        
//  }
//});

//// all list items
//var listItems = document.querySelectorAll('li');
//
//// Looping through the list.
//var i = 0; i < listItems.length;
//
//function right(event) {
//  if (event.key === 'ArrowRight') {
//    console.log(i);
//    // check if the focus is lower than 0 or on -1
//    if (i <= 0 && i == -1) {
//      // if that is the case place it on the end of the list
//      i = listItems.length;
//      // focus on the item
//      listItems[i].focus();
//    } else {
//      // if not you need to go up
//      i--;
//      // set focus on the item
//      listItems[i].focus();
//    }
//  }
//}
//
//// event on keyup or keydown
//document.addEventListener('keydown', right, true); 

// Hier volgen mijn eerste pogingen om de info toggle over een film te laten verschijnen en weer verdwijnen   
//    const afbeelding = document.querySelector('img');
//
//    function showDetails() {
//        div.classList.toggle('show')
//        console.log(showDetails);
//    }
//
//    afbeelding.addEventListener('click', showDetails);

// Poging 2
//    const movieCover = document.querySelector('img');

//    function showArticle() {
//        article.classList.toggle('show');
//        console.log(showArticle);
//    }
//
//    movieCover.addEventListener('click', showArticle);

// function showCover(movies) {
//
//    for (let i = 0; i < movies.length; i++) {
//
//        var cover = document.createElement('img');
//        cover.setAttribute("src", movies[i].cover);
//        section.appendChild(cover);
//        
//        
//    }
