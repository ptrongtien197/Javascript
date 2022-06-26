// Callback hell

setTimeout(() => {
    console.log(1); // work 1
    setTimeout(() => {
        console.log(2); // work 2
        setTimeout(() => {
            console.log(3); // work 3
            setTimeout(() => {
                console.log(4); // work 4
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// 1. new Promise
// 2. Executor

//State
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Wrong: Memory leak
// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         // Logic
//         // Thành công: resolve();
//         // Thất bại: reject();

//         // Fake call API
//         resolve([
//             {
//                 id: 1,
//                 name: "Javascript day la promise resolves",
//             },
//         ]);
//     }
// );

// promise
//     .then(function (course) {
//         console.log(course);
//     })

//     .catch(function () {
//         console.log("failure");
//     })

//     .finally(function () {
//         console.log("done");
//     });

var promise = new Promise(function (resolve, reject) {
    // Code(những công việc cần làm)
    //Thành công resolve();
    // có thể truyền tham sô vào resolve để thằng then nhận
    // Thất bại reject();
    // có thể truyền tham sô vào resolve để thằng catch nhận
    //==== Ví dụ====
    resolve([
        {
            name: "Javascipt",
            cost: 20000,
        },
        {
            name: "Java",
            cost: 30000,
        },
    ]);
    // ====== End ví dụ======
});

promise
    .then(function (a) {
        /*Khi nào funtion promise trả về 
            thành công resolve thì hàm then đc gọi 
            */
        // a tham số của hàm resolve như vị dụ trên
        var costs = a.map(function (a) {
            return a.cost;
        }); //Lấy giá trị cost trong mảng a
        console.log(costs); // in ra ví dụ
    })
    .catch(function () {
        /*
            Khi nào funtion promise trả về
            thất bại reject thì hàm catch đc gọi
            */
    })
    .finally(function () {
        /*
            Khi thành công hoặc thất bại thì
            thằng finally cũng được gọi
            */
    });
