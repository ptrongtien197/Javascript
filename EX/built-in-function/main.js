/**
 * Giới thiệu hàm built-in
 * alert
 * console
 * confirm
 * prompt
 * set timeout
 * set interval
 */

var fullName = "phantrongtien";

console.log(fullName);

confirm("xác nhận bạn đủ tuổi");

setTimeout(function () {
    alert("thong bao");
}, 1000);

setInterval(function () {
    console.log("Thong bao log" + Math.random());
}, 1000);
