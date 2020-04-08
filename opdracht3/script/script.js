// Selecteer de header en section uit de HTML file
const section1 = document.querySelector('#sec1');
//const section2 = document.querySelector('#sec2');

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

    for (let i = 0; i < movies.length; i++) {
        
        var article = document.createElement('article');
        section1.appendChild(article);

        var cover = document.createElement('img');
        cover.setAttribute("src", movies[i].cover);
        article.appendChild(cover);
        
        var div = document.createElement('div');
        article.appendChild(div);

        var titel = document.createElement('h2');
        titel.textContent = movies[i].title;
        div.appendChild(titel);

        var genre = document.createElement('p');
        genre.textContent = ('Genre: ' + movies[i].genres);
        div.appendChild(genre);

        var plot = document.createElement('p');
        plot.textContent = movies[i].plot;
        div.appendChild(plot);

        var release = document.createElement('p');
        release.textContent = ('Release: ' + movies[i].release_date);
        div.appendChild(release);
    }

    const afbeelding = document.querySelector('img');

    function showDetails() {
        div.classList.toggle('show')
        console.log(showDetails);
    }

    afbeelding.addEventListener('click', showDetails);
    
    function vergrootImg() {
        afbeelding.classList.add('click');
    }
    
    afbeelding.addEventListener('click', vergrootImg)
}




// Versie 1
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
