// Cau lenh re nhanh - If else
var date = 2;

if (date === 2) {
    console.log("hom nay la thu 2");
} else if (date > 0) {
    console.log("hom nay la thu 3");
} else if (date === 4) {
    console.log("hom nay la thu 4");
} else {
    console.log("nothing");
}

// Cau lenh re nhanh - switch

switch (date) {
    case 2:
        console.log("hom nay la thu 2");
        break;
    case 3:
        console.log("hom nay la thu 3");
        break;
    case 4:
        console.log("hom nay la thu 4");
        break;
    case 5:
        console.log("hom nay la thu 5");
        break;
    case 6:
        console.log("hom nay la thu 6");
        break;
    case 7:
        console.log("hom nay la thu 7");
        break;
    case 8:
        console.log("hom nay la chu nhat");
        break;
    default:
        console.log("nothing");
        break;
}

// Toan tu 3 ngoi - Ternary operator

var course = {
    name: "Javascript",
    coin: 250,
};

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log("free");
// }

var result = course.coin > 0 ? `${course.coin} Coins` : "free";

var a = 1;
var b = 2;

var c = a > 0 ? a : b;
