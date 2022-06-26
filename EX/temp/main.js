// function total(arr) {
//     // your code here
//  }

//  console.log(total([1,2,3])); // 6

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

var newCourse = topic.reduce(function (preValue, NextValue) {
    var result = NextValue.courses;
    var resultTitle = result.reduce(function (preTitle, nextTitle) {
        return preTitle.concat(nextTitle.title);
    }, []);

    return preValue.concat(resultTitle);
}, []);

console.log(newCourse);
