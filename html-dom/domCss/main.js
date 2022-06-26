var boxElement = document.querySelector(".box");

boxElement.style.width = "100px";
boxElement.style.height = "100px";
boxElement.style.backgroundColor = "red";

Object.assign(boxElement.style, {
    width: "200px",
    height: "200px",
    backgroundColor: "green",
});

console.log(boxElement.style.backgroundColor);

