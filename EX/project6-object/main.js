// Object trong Javascript

// Exercise 1:

// var emailKey = "email";

// var myInfo = {
//     "full-name": "PhanTrongTien",
//     name: "TrongTien",
//     age: "18",
//     address: "Ha noi, VN",
//     [emailKey]: "phantrongtien1797@gmail.com",
//     getname: function () {
//         return this.name;
//     },
// };

// // Function --> Phuong Thuc / Method
// // Others --> Thuoc tinh / Property

// // myInfo.email = 'phantrongtien1797@gmail.com';
// myInfo["my-email"] = "phantrongtien1797@gmail.com";

// console.log(myInfo);
// console.log(myInfo.age);
// console.log(myInfo["age"]);

// var myKey = "address";
// console.log(myInfo[myKey]);

// console.log(typeof myInfo.getname);
// console.log(myInfo.getname());

// Exercise 2:
// Object constructor

// // tip 1:
// function User(firstName, lastName, avarta) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avarta = avarta;

//     this.getname = function () {
//         return `${this.firstName} ${this.lastName}`;
//     };
// }

// // tip 2:
// // var User = function (firstName, lastName, avarta) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.avarta = avarta;

// //     this.getname = function () {
// //         return `${this.firstName} ${this.lastName}`;
// //     };
// // };

// var author = new User("tien", "trong", "avarta");
// var author2 = new User("vinh", "trong", "avarta");
// var author3 = new User("chau", "trong", "avarta");

// author.title = "Hello world";
// author2.comment = "My school";

// console.log(author);
// console.log(author.constructor === User);
// console.log(author.getname());

// console.log(author2);
// console.log(author2.getname());

// Exercise 3:
/*
    Object Prototype - Basic

    1. Prototype la gi
    2. Su dung khi nao
*/

// function User(firstName, lastName, avarta) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avarta = avarta;

//     this.getname = function () {
//         return `${this.firstName} ${this.lastName}`;
//     };
// }

// User.prototype.className = "F8";
// User.prototype.getClassName = function () {
//     return this.className;
// };

// var user = new User("Tien", "Trong", "Avarta 1");
// var user2 = new User("Vinh", "Trong", "Avarta 2");

// console.log(user.className);
// console.log(user2.getClassName());

// Exercise 4:
// Doi tuong date

// var date = new Date(); //Object
// // var date = Date(); //String

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// console.log(day);
// console.log(`${day}/${month}/${year}`);

// Key word: javascript date objec mozilla

// Exercise 5:
/*
Math object

    - Math.PI
    - Math.round()
    - Math.abs()
    - Math.ceil()
    - Math.floor()
    - Math.random()
    - Math.min()
    - Math.max()

*/

console.log(Math.PI);
console.log(Math.round(1.6));
console.log(Math.abs(-4));
console.log(Math.ceil(4.000000001));
console.log(Math.floor(5.9));
console.log(Math.floor(Math.random() * 10));

var random = Math.floor(Math.random() * 100);
var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin", "60 coin"];

console.log(bonus[random]);

if (random < 5) {
    console.log("cuong hoa thanh cong");
}

console.log(Math.min(-100, 90, 50, 120, -20));
console.log(Math.max(-100, 90, 50, 120, -20));
