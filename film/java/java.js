var dragged;
var pulseElement = document.querySelector('.dropzone')

//var toggleActiveren = document.querySelector('.draggable');
//var toggleInfo = document.querySelector('.toggle');
//
//function infoToggle() {
//    toggleInfo.classList.toggle("show");
//}
//
//toggleActiveren.addEventListener('', infoToggle);

//var likeElement = document.querySelector('.like');

function dragPulse() {
    document.querySelector('.dropzone').classList.add('.show');
}

document.addEventListener("drag", function (event) {}, false);

document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function (event) {
    event.preventDefault();
}, false);

// Highlight de dropzone wanneer je erboven hangt
document.addEventListener("dragenter", function (event) {
    if (event.target.className == "dropzone") {
        event.target.style.background = "grey";
    }
}, false);

// Reset de gewone kleur van een dropzone wanneer de draggable target vertrekt
document.addEventListener("dragleave", function (event) {
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }
}, false);

document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);


//function toggleplaatje(img) {
//    var imgBestand = img.src.split('/').pop();
//    if (imgBestand == "blijsmiley.png") {
//        img.src = "sadsmiley,png";
//    } else {
//        img.src = "blijsmiley.png"
//    }
//}

//function dislike() {
//    likeElement.src = '../img/sadsmiley.png';
//    console.log("dislike");

//function like() {
//    document.getElementsByClassName(".like").reset();
//}

//likeElement.addEventListener('click', dislike);
//likeELement.addEventlistener('click', like);

// Bron drag and drop code:  https://developer.mozilla.org/nl/docs/Web/API/Document/drag_event
