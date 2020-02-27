//var dragged;
//
///* Zorgt ervoor dat het hele drag n drop werkt */
//document.addEventListener("drag", function(event) {
//
//}, false);
//
///* Zorgt ervoor dat ik dingen kan droppen op een element */
//document.addEventListener("dragstart", function(event) {
//  dragged = event.target;
//}, false);
//
///* events fired on the drop targets */
//document.addEventListener("dragover", function(event) {
//  event.preventDefault();
//}, false);

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

// Highlight de dropzone wanneer je erboven hangt
document.addEventListener("dragenter", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "grey";
  }
}, false);

// Reset de gewone kleur van een dropzone wanneer de draggable target vertrekt
document.addEventListener("dragleave", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }
}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);