// var promise = new Promise((resolve, reject) => {
//     resolve();
//   })
  
//   promise
//     .then(() => {
//         console.log("1")
//     })
//     .then(() => {
//         return new Promise((resolve,reject) => {
//           setTimeout(() => {
//               return reject("loi roi");
//           },3000)
//         })
//     })
//     .then(() => {
//         console.log("2");
//     })
//     .catch(err => {
//         console.log(err);
//     })

// var promise = Promise.resolver("success");

// promise
//     .then((result) => {
//         console.log("result", result);
//     })
//     .catch((err) => {
//         console.log("error", err);
//     })

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1]);
    }, 2000);
})

var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2,3]);
    }, 5000);
})

Promise.all([promise, promise1])
    // .then((result) => {
    //     // console.log("result", result);
    //     var result1 = result[0];
    //     var result2 = result[1];
    //     var result3 = result[2];
    //     console.log(result1.concat(result2.concat(result3)))
    // })
    .then(([result1, result2]) => {
        console.log(result1.concat(result2));
    })
    .catch((error) => {
        console.log("error: ", error);
    })
