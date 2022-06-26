var myArray = ["a", "b", "c", "d", "a", "b", "c"];

console.log([...new Set(myArray)]);

// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

// function deQuy(num) {
//     num--;
//     if (num < 0) {
//         // Dừng
//         // ...
//         return;
//     }
//     deQuy();
// }

// deQuy(10);

// A -> Loop -> CPU
// A -> De quy -> RAM
// lập trình hướng hàm - Functional programing

function countDown(num) {
    if (num > 0) {
        return countDown(num - 1);
    }
    return num;
}

countDown(10);

//

function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var array = ["javascript", "PHP", "Ruby"];

loop(0, array.length, function (index) {
    // console.log("index:", index);
    console.log(array[index]);
});

//

function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1);
    }
    return 1;
}
