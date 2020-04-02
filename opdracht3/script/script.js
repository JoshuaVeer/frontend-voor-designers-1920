// Selecteer de header en section uit de HTML file
const section = document.querySelector('section');
const article = document.querySelector('article')

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

//        var summary = document.createElement('p');
//        summary.textContent = movies[i].simple_plot;
//        section2.appendChild(summary);
    }
}


//    for (let i = 0; i < heroes.length; i++) {
//        const myArticle = document.createElement('article');
//        const myH2 = document.createElement('h2');
//        const myPara1 = document.createElement('p');
//        const myPara2 = document.createElement('p');
//        const myPara3 = document.createElement('p');
//        const myList = document.createElement('ul');
//
//        myH2.textContent = heroes[i].name;
//        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//        myPara2.textContent = 'Age: ' + heroes[i].age;
//        myPara3.textContent = 'Superpowers:';
//
//        const superPowers = heroes[i].powers;
//        for (let j = 0; j < superPowers.length; j++) {
//            const listItem = document.createElement('li');
//            listItem.textContent = superPowers[j];
//            myList.appendChild(listItem);
//        }
//
//        myArticle.appendChild(myH2);
//        myArticle.appendChild(myPara1);
//        myArticle.appendChild(myPara2);
//        myArticle.appendChild(myPara3);
//        myArticle.appendChild(myList);
//
//        section.appendChild(myArticle);
//    }
