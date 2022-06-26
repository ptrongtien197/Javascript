var btnElement = document.getElementById("btn");

function viec1() {
    console.log(Math.random());
}

function viec2() {
    console.log("viec 2");
}

btnElement.addEventListener("click", viec1);
btnElement.addEventListener("click", viec2);

setTimeout(() => {
    btnElement.removeEventListener("click", viec1);
}, 3000);
