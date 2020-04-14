// Selecteer de header en section uit de HTML file
const section1 = document.querySelector('#sec1');

// De URL van het JSON bestand in een variabele stoppen
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
// Een request object aanmaken
let request = new XMLHttpRequest();

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

function showCover(movies) {

    var unorderedList = document.createElement('ul');
    unorderedList.setAttribute("id", "filmLijst")
    section1.appendChild(unorderedList);

    for (let i = 0; i < movies.length; i++) {
        var li = document.createElement('li');
        unorderedList.appendChild(li);

        var cover = document.createElement('img');
        cover.setAttribute("src", movies[i].cover);
        li.appendChild(cover);

        var div = document.createElement('div');
        li.appendChild(div);

        var titel = document.createElement('h2');
        titel.textContent = movies[i].title;
        div.appendChild(titel);

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

var slider = document.querySelector('#slider');
var grid = document.querySelector('#grid');
var lijst = document.querySelector('#filmLijst');

function gridSwitch() {
    grid.classList.add('active');
    slider.classList.remove('active');
    lijst.classList.add('switch');
}

function sliderSwitch() {
    grid.classList.remove('active');
    slider.classList.add('active');
    lijst.classList.remove('switch');
}

grid.addEventListener('click', gridSwitch);
slider.addEventListener('click', sliderSwitch);



//var listItem = document.querySelector('li');
//var liSelected;

//listItem(window).keydown(function(e){
//    if(e.which === 37){
//        if(liSelected){
//            liSelected.removeClass('selected');
//            next = liSelected.next();
//            if(next.length > 0){
//                liSelected = next.addClass('selected');
//            }else{
//                liSelected = li.eq(0).addClass('selected');
//            }
//        }else{
//            liSelected = li.eq(0).addClass('selected');
//        }
//    }else if(e.which === 39){
//        if(liSelected){
//            liSelected.removeClass('selected');
//            next = liSelected.prev();
//            if(next.length > 0){
//                liSelected = next.addClass('selected');
//            }else{
//                liSelected = li.last().addClass('selected');
//            }
//        }else{
//            liSelected = li.last().addClass('selected');
//        }
//    }
//});

// Versie 1    
//    const afbeelding = document.querySelector('img');
//
//    function showDetails() {
//        div.classList.toggle('show')
//        console.log(showDetails);
//    }
//
//    afbeelding.addEventListener('click', showDetails);

// Versie 2
//    const movieCover = document.querySelector('img');

//    function showArticle() {
//        article.classList.toggle('show');
//        console.log(showArticle);
//    }
//
//    movieCover.addEventListener('click', showArticle);

//function showCover(movies) {
//
//    for (let i = 0; i < movies.length; i++) {
//
//        var cover = document.createElement('img');
//        cover.setAttribute("src", movies[i].cover);
//        section.appendChild(cover);
//        
//        
//    }
