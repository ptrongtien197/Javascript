// Exercise 1:

var i = 0;
var myArray = ["Javascript", "PHP", "Ruby"];

while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

// Exercise 2:
// do/while loop

var i = 0;
var isSuccess = false;

do {
    i++;
    console.log("Nap the lan" + i);
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i <= 2);

// Exercise 3:
// break/ & continue in loop
for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
}

for (var i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue; // bỏ qua các câu lệnh ở dưới và quay trở lại vòng lặp để tiếp tục
    }
    console.log(i);
}

// Exercise 4:
// Nested loop

var myArray_nested = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (var i = 0; i < myArray_nested.length; i++) {
    for (var j = 0; j < myArray_nested[i].length; j++) {
        console.log(myArray_nested[i][j]);
    }
}

// Exercise 5:

for (var i = 100; i > 0; i--) {
    console.log(i);
}
