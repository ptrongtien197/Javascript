var h2Element = document.querySelectorAll("h2");

// h2Element.onclick = function () {
//     console.log(Math.random());
// };

// h2Element.onclick = function (event) {
//     console.log(event.target);
// };

for (var i = 0; i < h2Element.length; ++i) {
    h2Element[i].onclick = function (event) {
        console.log(event.target);
    };
}

// Dom event example

var inputValue;

var inputTextElement = document.querySelector('input[type="text"]');
var inputCheckboxElement = document.querySelector('input[type="checkbox"]');
var selectElement = document.querySelector("select");

// inputElement.onchange = function (event) {
//     console.log(event.target.value);
// };

// inputTextElement.oninput = function (event) {
//     inputvalue = event.target.value;
// };

inputCheckboxElement.onchange = function (event) {
    console.log(event.target.checked);
};

selectElement.onchange = function (event) {
    console.log(event.target.value);
};

inputTextElement.onkeydown = function (event) {
    inputvalue = event.target;
};

document.onkeydown = function (event) {
    switch (event.which) {
        case 27:
            console.log("exit");
            break;
    }
};
