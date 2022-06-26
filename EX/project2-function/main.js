/**
 * Giới thiệu hàm built-in
 * alert
 * console
 * confirm
 * prompt
 * set timeout
 * set interval
 */

// function showDialog() {
//     alert("Hello world");
// }

// function writeLog(message) {
//     console.log(message);
// }

// function writeLog() {
//     console.log(arguments);
// }

function writeLog() {
    var myString = "";
    for (var param of arguments) {
        // myString += `${param} -`;
        myString = myString + "-" + param;
    }
    console.log(myString);
}

writeLog("test", "test2", "test3");

var isConfirm = confirm("message?");

// return trong hàm - javascript basic

function cong(a, b) {
    return a + b;
}

var result = cong(1, 2);
console.log(result);

//Định nghĩa hàm trong hàm
function showMessage() {
    function showMessage2() {
        console.log("Message 2");
    }

    showMessage2();
}

showMessage();

// some function

function showMessage() {
    // Declaration function
}

var showMessage2 = function () {
    // Expresstion function
};

setTimeout(function () {
    // Expresstion function
});

var myObject = {
    myFunction: function () {
        // Expresstion function
    },
};
