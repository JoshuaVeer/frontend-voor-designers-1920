var welkomSlidein = document.querySelector('#hallodaar');
var mijnNaam = document.querySelector('#naam');
var sectieEen = document.querySelector('#welkom');
var sectieTwee = document.querySelector('#ikbenjos');
var sectieDrie = document.querySelector('#ikontwerp');

console.log(sectieEen.offsetTop);
console.log(sectieTwee.offsetTop);
console.log(sectieDrie.offsetTop);

function slideInSide() {
    welkomSlidein.classList.add('welkomin')
    console.log(slideInSide);
}

function nextSection() {
    window.scroll({
        top: 700,
        behavior: 'smooth'
    });
}

function invisibleUit() {
    mijnNaam.classlist.add(halloJos)
    console.log(invisibleUit);
    
//    if (offsetTop = 1500) {
//        mijnNaam.classlist.add('Hallojos')
//        console.log("Hey makker" + invisibleUit)
//    }
//    else {}
}

//function myFunction() {
//    if (window.pageYOffset >= sticky) {
//        navbar.classList.add("sticky")
//    } else {
//        navbar.classList.remove("sticky");
//    }
//    console.log("window " + window.pageYOffset);
//}
//
//console.log(ikJos, "ikJos" + ikJos.scrollHeight);

document.addEventListener('click', slideInSide);
document.addEventListener('keydown', slideInSide);
document.addeventListener('click', invisibleUit);