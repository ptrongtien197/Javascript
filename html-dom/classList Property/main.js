// Classlist property

// add
// contains
// remove
// toggle

var boxElement = document.querySelector(".box");

boxElement.classList.add("red", "blue");

console.log(boxElement.classList.contains("red"));

setTimeout(() => {
    boxElement.classList.remove("red");
}, 3000);

setInterval(() => {
    boxElement.classList.toggle("blue");
}, 3000);
