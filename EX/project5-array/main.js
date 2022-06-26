/*
Mang trong Javascript - Array

1. Tao mang
    - Cach tao
    - Su dung cach nao? Tai sao?
    - Kiem tra data type?

2. Truy xuat mang
    - Do dai mang
    - Lay phan tu theo index
*/

// var languages = ["javascript", "ruby", "reactjs", null, undefined, function () {}, {}, 123];

// var languages = new Array("javascript", "ruby", "reactjs", null, undefined, function () {}, {}, 123);

// console.log(typeof languages);

// console.log(Array.isArray(languages));
// console.log(languages.length);

// console.log(languages[1]); //[1]: index || chi muc || key

/*
Lam viec voi Array

//Key word: Javascript array methods

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing

*/

var languages = ["Javascript", "PHP", "Ruby"];

// console.log(languages.toString());
// console.log(languages.join(""));
// console.log(languages.join(", "));
// Pop
console.log(languages.pop()); //Xoa element cuoi mang va tra ve phan tu da xoa
console.log(languages.pop()); //Xoa element
console.log(languages.pop()); //Xoa element
console.log(languages.pop()); //Xoa element

// Push
console.log(languages.push("Dart", "Java")); // Them element o cuoi mang va tra ve do dai cua mang

//Shift
console.log(languages.shift()); //xoa element o dau mang va tra ve phan tu da xoa
console.log(languages.shift());
console.log(languages.shift());
console.log(languages.shift());

// Unshift
console.log(languages.push("Dart", "Java")); // Them element o dau mang va tra ve do dai cua mang

//Splicing
languages.splice(1, 1); // Xoa element theo index
languages.splice(1, 0, "Dart"); //Chen dart vao index = 1
languages.splice(1, 1, "Dart", "Java"); //Xoa element index = 1 va insert element index = 1

// Concat
var languages2 = ["Dart", "Nodejs"];
console.log(languages2.concat(languages1));

// Slicing
console.log(languages.slice(1, 2)); //Cut element for index

console.log(languages);
