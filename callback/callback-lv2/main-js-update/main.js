// 1. Object prototype
// 2. For in
// 3. hasOwnProperty

var courses1 = ["javascript", "PHP", "Ruby"];

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 250,
        isFinish: true,
    },
    {
        id: 2,
        name: "html,css",
        coin: 0,
        isFinish: false,
    },
    {
        id: 3,
        name: "ruby",
        coin: 0,
        isFinish: true,
    },
    {
        id: 4,
        name: "PHP",
        coin: 100,
        isFinish: false,
    },
    {
        id: 5,
        name: "reactjs",
        coin: 150,
        isFinish: true,
    },
    {
        id: 6,
        name: "ruby",
        coin: 0,
        isFinish: false,
    },
];

var numbers = [3, 5, 7, 9, 10];

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], i, this);
        }
    }
};

Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
};

// var filterCourses = courses.filter2(function (course, index, array) {
//     return course.coin > 100;
// });
// console.log(filterCourses);
// keysearch: Value types and reference types

Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
};

// var result = courses.some(function (course, index) {
//     return course.isFinish;
// });
// console.log(result);

Array.prototype.every2 = function (callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
};

var result = courses.every2(function (course, index) {
    return course.isFinish;
});
console.log(result);
