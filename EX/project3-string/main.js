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

/**
 * 1. Tạo chuỗi
 *  - Các cách tạo chuỗi
 *  - Nên dùng cách nào
 *  - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 */

var fullName = "TrongTien"; //tip 1
var lastName = "Phan";
// var fullName = new String("TrongTien"); //tip 2

// console.log(fullName);
// console.log(fullName.length);

console.log(`Toi la: ${lastName} ${fullName}`); //Template string ES6

// Level 2
var myString = "Hoc Javascript tai F8";
// 1. Length
// console.log(myString.length);

// 2. Find index
// console.log(myString.indexOf("Javascript"));
//Nêu tìm thấy sẽ trả về vị trí của word (bắt đầu từ 0). Nếu không tìm thấy sẽ trả về -1.
// console.log(myString.indexOf("Javascript", 6));
// console.log(myString.lastIndexOf("Javascript", 6));
// console.log(myString.search("Javascript"));

// 3. Cut String
// console.log(myString.slice(4, 14)); //cut Javascript
// console.log(myString.slice(-17, -7)); //cut Javascript

// 4. Replace
// console.log(myString.replace('Javacript', 'JS'));
// console.log(myString.replace(/Javascript/g, "JS"));

// 5. Convert to upper case
// console.log(myString.toUpperCase());

// 6. Convert to lower case
// console.log(myString.toLowerCase());

// 7. Trim
// console.log(myString.trim().length);

// 8. Split
// Cắt chuỗi thành một array
var languages = "Javascript, PHP, Ruby";
console.log(languages.split(", "));
// console.log(myString.split(""));

// 9. Get a character by index
const myString2 = "Javascripts";
console.log(myString2.charAt(0)); //Typeof string
// console.log(myString2[5]); //Typeof Underfine when false

// Key word: Javascript string methods
