/*
    Array methods:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

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

// courses.forEach(function (course, index) {
//     console.log(course, index);
// });

// var isFree = courses.every(function (course, index) {
//     return course.coin === 0;
// });

// var isFree = courses.some(function (course, index) {
//     return course.coin === 0;
// });

// console.log(isFree);

// var course = courses.find(function (course, index) {
//     return course.name === "ruby";
// });

// console.log(course);

// var listCourse = courses.filter(function (course, index) {
//     return course.name === "ruby";
// });

// console.log(course);

// Exercise 2: Array map() method

// var courseHandler = function (course) {
//     console.log(course);
// };

function courseHandler(course, index, originArray) {
    // console.log(course);
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia ${course.coin}`,
        index: index,
        // originArray: originArray,
        originArray: course,
    };
}

var newCourses = courses.map(courseHandler);

// var newCourses = courses.map(function (course) {
//     console.log(course);
// });

console.log(newCourses);

// For Reduce

// var totalCoin = 0; //Biến lưu trữ

// // Lặp qua các phần tử
// for (var course of courses) {
//     // Thực hiện việc lưu trữ
//     totalCoin += course.coin;
// }

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     i++;
//     var total = accumulator + currentValue.coin;
//     console.table({
//         "Lượt chạy": i,
//         "Biến lưu trữ": accumulator,
//         "Giá khóa học": currentValue.coin,
//         "Tích trữ được": total,
//     });
//     // console.log(accumulator);
//     // console.log(currentValue);

//     return total;
// }

// var totalCoin = courses.reduce(coinHandler, 0); //initial value

/**** */
// function coinHandler(accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// }

// var totalCoin = courses.reduce(coinHandler, 0); //initial value

/**** */

// var totalCoin = courses.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// }, 0);

// var totalCoin = courses.reduce(function (total, course) {
//     return total + course.coin;
// }, 0);

// console.log(totalCoin);

// var numbers = [250, 0, 0, 100, 150, 0];

// var totalCoin = numbers.reduce(function (total, number) {
//     return total + number;
// });

// console.log(totalCoin);

// Example 1:
// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

// Lấy ra các khóa học đưa vaofo 1 mảng mới

var topic = [
    {
        topic: "frond-end",
        courses: [
            {
                id: 1,
                title: "HTML,CSS",
            },
            {
                id: 2,
                title: "Javascript",
            },
        ],
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP",
            },
            {
                id: 2,
                title: "NodeJS",
            },
        ],
    },
];

var newCourses = topic.reduce(function (course, topic) {
    return course.concat(topic.courses);
}, []);

console.log(newCourses);

var htmls = newCourses.map(function (course) {
    return `
        <div>
        <h2>${course.title}</h2>
        <p>ID:${course.id}</p>
        </div>
    `;
});

console.log(htmls.join(""));
