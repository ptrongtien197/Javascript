// callback - Phần 2?

// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại (Trong hàm nhận đối số)

var courses1 = ["javascript", "PHP", "Ruby"];

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 250,
    },
    {
        id: 2,
        name: "html,css",
        coin: 0,
    },
    {
        id: 3,
        name: "ruby",
        coin: 0,
    },
    {
        id: 4,
        name: "PHP",
        coin: 100,
    },
    {
        id: 5,
        name: "reactjs",
        coin: 150,
    },
    {
        id: 6,
        name: "ruby",
        coin: 0,
    },
];

var numbers = [3, 5, 7, 9, 10];

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

/** */
// function func1(param) {
//     console.log("function 1 run before");
//     param("function 2 run after function 1");
// }
// function func2(value) {
//     console.log(value);
// }
// func1(func2);

/** */
// function doHomework(subject, callback) {
//     setTimeout(function () {
//         console.log(`Bắt đầu làm bài tập ${subject}.`);
//         callback();
//     }, 5000);
// }

// function alertFinished() {
//     console.log("Làm bài tập xong!");
// }

// doHomework("Toán", alertFinished);

/** */
Array.prototype.find2 = function (callback, index) {
    var arrayLength = this.length,
        index;

    for (var i = index; i < arrayLength; i++) {
        if (callback(this[i], i) === true) {
            return this[i];
        } else {
            console.log("Error");
        }
    }
};

// var resultCourse = courses.find2(function (course, index) {
//     console.log("lan thu 1");
//     return course.name === "ruby";
// });

// console.log(resultCourse);

Array.prototype.filter2 = function (callback, index) {
    var output = [],
        index,
        arrayLength = this.length;
    for (var i = index; i < arrayLength; i++) {
        if (callback(this[i], i) === true) {
            result = this[i];
            output.push(result);
        }
    }
    return output;
};

// var listCourse = courses.filter2(function (course, index) {
//     return course.name === "ruby";
// });

// console.log(listCourse);

Array.prototype.every2 = function (callback, index) {
    var arrayLength = this.length,
        index,
        count = 0;
    for (var i = index; i < arrayLength; i++) {
        if (callback(this[i], i) === true) {
            count++;
        }
    }
    if (count == arrayLength) {
        return true;
    } else {
        return false;
    }
};

// var isFree = numbers.every2(function (course, index) {
//     return course > 2;
// });

// console.log(isFree);

Array.prototype.some2 = function (callback, index) {
    var arrayLength = this.length,
        index;

    for (var i = index; i < arrayLength; i++) {
        if (callback(this[i], i) === true) {
            return true;
        }
    }
};

// var isFree = courses.some2(function (course, index) {
//     return course.coin === 100;
// }, 1);
// console.log(isFree);

Array.prototype.map2 = function (callback, index) {
    var arrayLength = this.length,
        index,
        output = [];

    for (var i = index; i < arrayLength; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
};

// function courseHandler(course, index, originArray) {
//     // console.log(course);
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia ${course.coin}`,
//         index: index,
//         // originArray: originArray,
//         originArray: course,
//     };
// }

// var newCourses = courses.map(courseHandler);
// console.log(newCourses);

// courses.map2(function (course, index) {
//     console.log(index, course);
// }, 0);

// var htmls = courses.map(function (course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(""));

function flatExample() {
    var arrayExample = [1, [5, 6], 2, [8, 9], 3, 4],
        result = [];
    for (var i = 0; i < arrayExample.length; i++) {
        result = result.concat(arrayExample[i]);
    }
    console.log(result);
}

flatExample();

Array.prototype.reduce2 = function (callback, result) {
    var arrayLength = this.length,
        i = 0;

    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }

    for (; i < arrayLength; i++) {
        var result = callback(result, this[i], i, this);
        console.log(typeof result);
    }
    return result;
};

/** */
// console.log(depthArray);
// var flatArray = depthArray.reduce2(function (flatOutput, depthItem) {
//     var result = flatOutput.concat(depthItem);
//     console.log(result);
//     return result;
// }, []);
// console.log(flatArray);

/** */
// function coinHandler(accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// }

// var totalCoin = courses.reduce2(coinHandler, 0); //initial value

// console.log(totalCoin);

Array.prototype.forEach2 = function (callback) {
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        callback(this[i], i);
    }
};

// numbers.forEach2(function (number) {
//     console.log(number);
// });

// courses.forEach2(function (course, index) {
//     console.log(course, index);
// });

// Array.prototype.reduce2 = function (callback, result) {
//     let i = 0;
//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }

//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this);
//     }
//     return result;
// };

// Array.prototype.map2 = function (callback) {
//     if (typeof callback !== "function") {
//         console.log(typeof callback);
//         console.log("fail, please input correct");
//     } else {
//         var output = [],
//             arrayLength = this.length;

//         for (var i = 0; i < arrayLength; i++) {
//             var result = callback(this[i], i);
//             output.push(result);
//         }

//         return output;
//     }
// };

// courses.map2(function (course, index) {
//     console.log(index, course);
// });

// var htmls = courses.map2(function (course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(""));
