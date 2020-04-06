// Selecteer de header en section uit de HTML file
var section = document.querySelector('section');
var article = document.querySelector('article');

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

        var cover = document.createElement('img');
        cover.setAttribute("src", movies[i].cover);
        section.appendChild(cover);

        var titel = document.createElement('h2');
        titel.textContent = movies[i].title;
        article.appendChild(titel);

        var genre = document.createElement('p');
        genre.textContent = ('Genre: ' + movies[i].genres);
        article.appendChild(genre);

        var plot = document.createElement('p');
        plot.textContent = movies[i].plot;
        article.appendChild(plot);

        var release = document.createElement('p');
        release.textContent = ('Release: ' + movies[i].release_date);
        article.appendChild(release);
    }

    function showArticle() {
        article.classList.toggle('show');
        console.log(showArticle);
    }

    cover.addEventListener('click', showArticle);
}
