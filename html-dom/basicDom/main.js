// HTML DOM

// 1. Element: ID, class, tag name
// css selector, html collection
// 2. Attributes
// 3. Text

// --------------------------------------

// Javascript: Browser | Server (NodeJS)

// Application programming interface (API)

// Browser: HTML -> DOM -> DOM API

/**
 * 1. HTML DOM
Là quy chuẩn mô tả mô hình của các thành phần trong tài liệu HTML được đưa ra bởi W3C.

 * 2. DOM API
Là bộ API nằm trong Web API có mặt trên những môi trường hỗ trợ duyệt web - như trên trình duyệt. DOM API cung cấp các đối tượng và phương thức hỗ trợ truy xuất, chỉnh sửa các đối tượng / thành phần trong DOM.
 */

var headingNode = document.getElementById("heading");
var headingNodes = document.getElementsByClassName("heading");
var headingNode1 = document.querySelector(".box .heading-2");
var headingNode2 = document.querySelector(".box .heading-2:first-child");
var headingNodes3 = document.querySelectorAll(".box .heading-2");
document.getElementsByTagName;

// console.log({ element: headingNodes });
// console.log({ element: headingNode1 });
// console.log(headingNode2);
// console.log(headingNodes3[0]);

// console.log(document.forms["form-1"]); //Html collection by ID
// console.log(document.forms.testForm); //Html collection by ID
// console.log(document.anchors); // Html collection by name tag a

// Công việc 1: Sử dụng tới `boxNode`
var boxNode = document.querySelector(".box");

// Công việc 2: Sử dụng tới các element con của `.box`
console.log(boxNode.getElementsByClassName("heading-2")); //

headingNode.title = "helllo";
// alert(headingNode.title);

headingNode.setAttribute("href", "myyoutube");

var headingElement = headingNode.getAttribute("href");
console.log(headingElement);

headingNode.innerText = `

New Heading


`;

headingNode1.textContent = `

New Heading





`;

var boxElement = document.querySelector(".box-1");
boxElement.innerHTML = "<h1>Heading Box-1</h1>";
boxElement.outerHTML = "<span>Test</span>";

// console.log(document.querySelector("h1").innerText);
