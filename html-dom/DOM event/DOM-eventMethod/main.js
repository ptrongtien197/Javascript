// var aElements = document.links;

// for (var i = 0; i < aElements.length; i++) {
//     aElements[i].onclick = function (event) {
//         if (!event.target.href.startsWith("https://f8.com.vn")) {
//             event.preventDefault();
//         }
//     };
// }

// Example 2:

var ulElement = document.querySelector("ul");

console.log(ulElement);

ulElement.onmousedown = function (event) {
    event.preventDefault();
};

ulElement.onclick = function (event) {
    console.log(event.target);
};

// Example 3:

// document.querySelector("div").onclick = function (event) {
//     console.log("DIV");
// };

// document.querySelector("button").onclick = function (event) {
//     event.stopPropagation();
//     console.log("Click me");
// };
