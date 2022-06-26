/*
Vòng lặp - Loop
    1. for - Lặp với điều kiện đúng
    2. for/in - Lặp qua key của đối tượng
    3. for/of - Lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp lại khi điều kiện đúng
*/

// Exercise 1:
// For loop

// for (var i = 1; i <= 100; i++) {
//     console.log(i);
// }

var i = 1;
var myArray = ["Javascript", "PHP", "Java"];

var arrayLength = myArray.length;

for (; i <= arrayLength; i++) {
    // console.log(i);
    console.log(myArray[i]);
}

// Exercise 2:
// For/in loop

var myInfo = {
    name: "TrongTien",
    age: 18,
    address: "Bacninh,VN",
};

for (var key in myInfo) {
    // code
    console.log(key);
    console.log(myInfo[key]);
}

var languages = ["javascript", "PHP", "Ruby"];

for (var key in languages) {
    console.log(key);
    console.log(languages[key]);
}

var myString = "javascript";

for (var key in myString) {
    console.log(key);
    console.log(myString[key]);
}

// Exercise 3:
// For/of loop

var languages_of = ["javascript", "PHP", "java"];
var stringOf = "Javascript";

for (var value of languages_of) {
    console.log(value);
}

for (var value of stringOf) {
    console.log(value);
}

var myObject = {
    name: "TrongTien",
    age: 18,
};

for (var value of Object.keys(myObject)) {
    console.log(value);
}

for (var value of Object.values(myObject)) {
    console.log(value);
}
