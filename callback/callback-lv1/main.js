// Callback

// Là hàm (function) được truyền qua đối số
// Khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số

function myFunction(callback) {
    if (typeof callback === "function") {
        callback("hoc lap trinh ");
    }
}

function myCallback(value) {
    console.log("Value:", value);
}

myFunction(myCallback);
